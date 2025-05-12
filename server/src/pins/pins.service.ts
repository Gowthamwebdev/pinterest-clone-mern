import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { v2 as Cloudinary } from 'cloudinary';
import { PrismaService } from 'src/prisma/prisma.service';
import { File } from "Multer";

@Injectable()
export class PinService {
  constructor(@Inject('CLOUDINARY') private cloudinary: typeof Cloudinary,
            private prisma: PrismaService) {}

  async uploadToCloudinary(file:File) {
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

  async createPin(userId: number, body: any, image:File) {
    if (!image) throw new BadRequestException('Image is required');
    
    const result: any = await this.uploadToCloudinary(image);

    const { title, description, tags } = body;

    await this.prisma.pin.create({
      data: {
        title,
        description,
        tags: tags ? tags.split(',') : [],
        image_url: result.secure_url,
        cloudinaryId: result.public_id,
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
}
