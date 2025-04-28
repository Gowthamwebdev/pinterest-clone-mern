import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePinDto } from './dto/create-pin.dto';

@Injectable()
export class PinService {
  constructor(private prisma: PrismaService) {}

  async createPin(userId: number, pinData: CreatePinDto) {
    try {
      const createdPin = await this.prisma.pin.create({
        data: {
          ...pinData,
          user: {
            connect: { id: userId }
          }
        }
      });

      return createdPin;
    } catch (error) {
      throw new NotFoundException('Unexpected error occured: ' + error.message);
    }
  }
}
