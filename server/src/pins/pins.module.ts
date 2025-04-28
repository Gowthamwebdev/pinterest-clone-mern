import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PinController } from './pins.controller';
import { PinService } from './pins.service';

@Module({
  controllers: [PinController],
  providers: [PinService, PrismaService],
})
export class PinModule {}