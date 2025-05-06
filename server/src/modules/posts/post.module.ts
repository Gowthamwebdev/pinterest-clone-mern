import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryProvider } from 'src/config/cloudinary.provider';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { CLOUDINARY_FILE_SIZE } from 'src/shared/utils/constants';

@Module({
  imports: [
    MulterModule.register({
      limits: { fileSize: CLOUDINARY_FILE_SIZE },
    }),
    ConfigModule,
  ],
  controllers: [PostController],
  providers: [PostService, PrismaService, CloudinaryProvider],
})
export class PostModule {}
