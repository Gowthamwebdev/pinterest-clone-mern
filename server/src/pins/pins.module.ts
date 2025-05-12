import { Module } from '@nestjs/common';
import { PinController } from './pins.controller';
import { PinService } from './pins.service';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';
import { CloudinaryProvider } from 'src/config/cloudinary.provider';
import { PrismaService } from 'src/prisma/prisma.service';
import { Express } from "express";


@Module({
  imports: [
    MulterModule.register({
      limits: {fileSize: 5 * 1024 * 1024 },
    }),
    ConfigModule
  ],
  controllers: [PinController],
  providers: [PinService, PrismaService, CloudinaryProvider],
})
export class PinModule {}