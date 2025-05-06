import {
  Injectable,
  Inject,
  BadRequestException,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { v2 as Cloudinary } from 'cloudinary';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {
  createSlug,
  createTagArray,
  validateImage,
} from 'src/shared/utils/functions';
import {} from 'src/shared/utils/constants';
import { cloudinaryDto } from './dto/cloudinary.dto';

@Injectable()
export class PostService {
  constructor(
    @Inject('CLOUDINARY') private cloudinary: typeof Cloudinary,
    private prisma: PrismaService,
  ) {}

  async uploadToCloudinary(file: Express.Multer.File): Promise<cloudinaryDto> {
    return new Promise((resolve, reject) => {
      const stream = this.cloudinary.uploader.upload_stream(
        { folder: 'pins' },
        (error, result) => {
          if (error) {
            reject(new Error(error.message || 'Cloudinary upload error'));
          } else {
            resolve(result as cloudinaryDto);
          }
        },
      );
      stream.end(file.buffer);
    });
  }

  async createPost(
    userId: number,
    body: CreatePostDto,
    image: Express.Multer.File,
  ) {
    // Validate image input
    validateImage(image);

    if (!body?.title?.trim()) {
      throw new BadRequestException('Title is required');
    }

    try {
      const result = await this.uploadToCloudinary(image);

      const tagNames = body.tags ? createTagArray(body.tags) : [];
      console.log(tagNames);
      if (tagNames.length > 15) {
        throw new BadRequestException('Maximum 15 tags allowed');
      }

      await this.prisma.pin.create({
        data: {
          title: body.title,
          description: body.description || null,
          image_url: result.secure_url,
          user_id: userId,
          tags: {
            connectOrCreate: tagNames.map((tagName) => {
              return {
                where: { name: tagName },
                create: {
                  name: tagName,
                  slug: createSlug(tagName),
                  created_by: {
                    connect: { id: userId },
                  },
                },
              };
            }),
          },
        },
        include: {
          tags: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
          user: {
            select: {
              id: true,
              name: true,
              profile_img: true,
            },
          },
        },
      });

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Pin created successfully',
      };
    } catch (error) {
      throw new HttpException(
        'Failed to create pin',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllPosts() {
    try {
      const pins = await this.prisma.pin.findMany({
        where: { deleted_at: null },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              profile_img: true,
            },
          },
        },
      });
      return pins;
    } catch (error) {
      console.error('Error creating pin:', error);
      throw new HttpException(
        'Failed to fetch pins',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getPostById(pinId: number) {
    try {
      const pin = await this.prisma.pin.findUnique({
        where: {
          id: pinId,
          deleted_at: null,
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              profile_img: true,
            },
          },
          tags: {
            select: {
              name: true,
              slug: true,
            },
          },
        },
      });

      if (!pin) {
        throw new NotFoundException('Pin not found');
      }

      const tagNames = pin.tags.map((tag) => tag.name);
      const recommendations = await this.recommendPostsByTags(tagNames, pin.id);

      return {
        statusCode: 200,
        message: 'Pin fetched successfully',
        data: {
          currentPin: {
            ...pin,
            tags: pin.tags.map((tag) => ({
              // id: tag.id,
              name: tag.name,
              slug: tag.slug,
            })),
          },
          recommendedPins: recommendations,
        },
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error(`Error fetching pin ${pinId}:`, error);
      throw new HttpException(
        error.message || 'Failed to fetch pin',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async editPostById({
    userId,
    pinId,
    updateData,
  }: {
    userId: number;
    pinId: number;
    updateData: UpdatePostDto;
  }) {
    try {
      const pin = await this.prisma.pin.findUnique({
        where: { id: pinId },
      });

      if (!pin) {
        throw new NotFoundException('Pin not found');
      }

      if (pin.user_id !== userId) {
        throw new HttpException(
          'You are not authorized to edit this pin',
          HttpStatus.FORBIDDEN,
        );
      }

      if (!updateData.title && !updateData.description && !updateData.tags) {
        throw new BadRequestException('At least one field must be updated');
      }

      const tagNames = updateData.tags
        ? createTagArray(updateData.tags)
        : undefined;

      await this.prisma.pin.update({
        where: { id: pinId },
        data: {
          title: updateData.title,
          description: updateData.description,
          updated_at: new Date(),
          ...(tagNames && {
            tags: {
              set: [],
              connectOrCreate: tagNames.map((tagName) => ({
                where: { name: tagName },
                create: {
                  name: tagName,
                  slug: createSlug(tagName),
                  created_by: { connect: { id: userId } },
                },
              })),
            },
          }),
        },
      });

      return {
        statusCode: HttpStatus.OK,
        message: 'Pin updated successfully',
      };
    } catch (error) {
      if (
        error instanceof HttpException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }
      throw new HttpException(
        'Failed to update pin',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deletePostById({ pinId, userId }: { pinId: number; userId: number }) {
    try {
      const pin = await this.prisma.pin.findUnique({
        where: { id: pinId },
      });

      if (!pin) {
        throw new NotFoundException('Pin not found');
      }

      if (pin.user_id !== userId) {
        throw new HttpException(
          'You are not authorized to delete this pin',
          HttpStatus.FORBIDDEN,
        );
      }

      await this.prisma.pin.update({
        where: { id: pinId },
        data: {
          deleted_at: new Date(),
        },
      });

      return {
        statusCode: HttpStatus.OK,
        message: 'Pin deleted successfully',
      };
    } catch (error) {
      if (
        error instanceof HttpException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }
      throw new HttpException(
        'Failed to delete pin',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async restorePostById({ pinId, userId }: { pinId: number; userId: number }) {
    try {
      const pin = await this.prisma.pin.findFirst({
        where: {
          id: pinId,
          deleted_at: { not: null },
        },
      });

      if (!pin) {
        throw new NotFoundException('Deleted pin not found');
      }

      if (pin.user_id !== userId) {
        throw new HttpException(
          'You are not authorized to restore this pin',
          HttpStatus.FORBIDDEN,
        );
      }

      await this.prisma.pin.update({
        where: { id: pinId },
        data: {
          deleted_at: null,
        },
      });

      return {
        statusCode: HttpStatus.OK,
        message: 'Pin restored successfully',
      };
    } catch (error) {
      if (
        error instanceof HttpException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }
      throw new HttpException(
        'Failed to restore pin',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private async recommendPostsByTags(tags: string[], excludePin: number) {
    try {
      if (!tags || tags.length === 0) return [];

      const recommendedPins = await this.prisma.pin.findMany({
        where: {
          AND: [
            { tags: { some: { name: { in: tags } } } },
            { id: { not: excludePin } },
            { deleted_at: null },
          ],
        },
        orderBy: {
          tags: {
            _count: 'desc',
          },
        },
        take: 20,
        include: {
          user: {},
          tags: {
            select: { name: true },
          },
        },
      });

      return recommendedPins;
    } catch (error) {
      console.error('Failed to fetch recommended pins:', error);
      return [];
    }
  }
}
