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

interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
  [key: string]: any;
}

@Injectable()
export class PinService {
  constructor(
    @Inject('CLOUDINARY') private cloudinary: typeof Cloudinary,
    private prisma: PrismaService,
  ) {}

  async uploadToCloudinary(
    file: Express.Multer.File,
  ): Promise<CloudinaryUploadResult> {
    return new Promise((resolve, reject) => {
      const stream = this.cloudinary.uploader.upload_stream(
        { folder: 'pins' },
        (error, result) => {
          if (error) {
            reject(new Error(error.message || 'Cloudinary upload error'));
          } else {
            resolve(result as CloudinaryUploadResult);
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
    // Validate inputs
    if (!image) {
      throw new BadRequestException('Image is required');
    }

    if (!body?.title?.trim()) {
      throw new BadRequestException('Title is required');
    }

    if (image.size > 5 * 1024 * 1024) {
      throw new BadRequestException('Image size exceeds 5MB limit');
    }

    const allowedMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'image/gif',
    ];
    if (!allowedMimeTypes.includes(image.mimetype)) {
      throw new BadRequestException(
        'Invalid image type. Only JPEG, PNG, WEBP, and GIF are allowed',
      );
    }

    try {
      const result = await this.uploadToCloudinary(image);

      await this.prisma.pin.create({
        data: {
          title: body.title,
          description: body.description || null,
          tags: body.tags ? body.tags.split(',') : [],
          image_url: result.secure_url,
          user_id: userId,
        },
      });

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Pin created successfully',
      };
    } catch (error) {
      console.error('Error creating pin:', error);
      throw new HttpException(
        error.message || 'Failed to create pin',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllPins() {
    try {
      const pins = await this.prisma.pin.findMany({ take: 10 });
      return pins;
    } catch (error) {
      throw new HttpException(
        'Unexpected error occured',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getPinById(pinId: number) {
    try {
      const pin = await this.prisma.pin.findUnique({
        where: { id: pinId },
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

      if (!pin) {
        throw new NotFoundException('Pin not found');
      }

      const recommendations = await this.recommendPinsByTags(pin.tags, pin.id);

      return {
        statusCode: 200,
        message: 'Pin fetched successfully',
        data: {
          currentPin: pin,
          recommendedPins: recommendations,
        },
      };
    } catch (error) {
      throw new HttpException(
        'Failed to fetch pin',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private async recommendPinsByTags(tags: string[], excludePin: number) {
    try {
      if (!tags || tags.length === 0) return;

      const recommendedPins = await this.prisma.pin.findMany({
        where: {
          AND: [
            { tags: { hasSome: tags.map((tag) => tag.trim()) } },
            { id: { not: excludePin } },
          ],
        },
        take: 20,
        select: {
          id: true,
          title: true,
          image_url: true,
        },
      });

      console.log('Recommended pins:', recommendedPins);

      return recommendedPins;
    } catch (error) {
      console.error('Failed to fetch recommended pins:', error);
    }
  }
}
