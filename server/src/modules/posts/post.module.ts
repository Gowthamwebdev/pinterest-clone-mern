import { Module } from '@nestjs/common';
import { PinService } from './post.service';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryProvider } from 'src/config/cloudinary.provider';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostController } from './post.controller';

@Module({
  imports: [
    MulterModule.register({
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
    ConfigModule,
  ],
  controllers: [PostController],
  providers: [PinService, PrismaService, CloudinaryProvider],
})
export class PostModule {}
