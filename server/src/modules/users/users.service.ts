import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findUserById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        created_pins: {
          select: {
            id: true,
            title: true,
            description: true,
            tags: true,
            user_id: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    return user;
  }
}
