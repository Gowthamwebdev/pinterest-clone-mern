import { Injectable, Inject, BadRequestException, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { v2 as Cloudinary } from 'cloudinary';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PinService {
  constructor(@Inject('CLOUDINARY') private cloudinary: typeof Cloudinary,
            private prisma: PrismaService) {}

  async uploadToCloudinary(file: Express.Multer.File) {
    return new Promise((resolve, reject) => {
      const stream = this.cloudinary.uploader.upload_stream(
        { folder: 'pins' },
        (error, result) => {
          if (error) reject(new Error(error.message || 'Cloudinary upload error'));
          else resolve(result);
        },
      );
      stream.end(file.buffer);
    });
  }

  async createPin(userId: number, body: any, image: Express.Multer.File) {
    try{
      if (!image) throw new BadRequestException('Image is required');
    
      const result: any = await this.uploadToCloudinary(image);
  
      const { title, description, tags } = body;
  
      await this.prisma.pin.create({
        data: {
          title,
          description,
          tags: tags ? tags.split(',') : [],
          image_url: result.secure_url,
          // cloudinaryId: result.public_id,
          user_id: userId,
        },
      })
      return {
        title,
        description,
        tags: tags ? tags.split(',') : [],
        imageUrl: result.secure_url,
        cloudinaryId: result.public_id,
        userId,
      };
    }
    catch(error){
      throw new HttpException('Unexpected error occured', HttpStatus.BAD_REQUEST);
    }
  }

  async getAllPins(){
    try{
        const pins= await this.prisma.pin.findMany({ take: 10 });
        return pins;
    }
    catch(error){
      throw new HttpException('Unexpected error occured', HttpStatus.BAD_REQUEST);
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
          recommendedPins: recommendations
        }
      };
    } catch (error) {
      throw new HttpException( 'Failed to fetch pin', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async recommendPinsByTags(tags: string[], excludePin: number) {
    try {
      if (!tags || tags.length === 0) return;

      const recommendedPins = await this.prisma.pin.findMany({
        where: {
          AND: [
            { tags: { hasSome: tags.map(tag => tag.trim()) } },
            { id: {not: excludePin } }
          ]
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

