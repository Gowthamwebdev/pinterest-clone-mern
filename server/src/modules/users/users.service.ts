import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findUserById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        first_name: true,
        last_name: true,
        profile_img: true,
        bio: true,
        language: true,
        region: true,
        created_pins: {
          where: { deleted_at: null },
          select: {
            id: true,
            title: true,
            description: true,
            tags: {
              select: {
                slug: true,
              },
            },
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

  async updateUser(userId: number, updateData: UpdateUserDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new NotFoundException(`User not found`);
      }

      if (updateData.name && updateData.name !== user.name) {
        const existingUser = await this.prisma.user.findUnique({
          where: { name: updateData.name },
        });

        if (existingUser && existingUser.id !== userId) {
          throw new ForbiddenException('Username already taken');
        }
      }
      await this.prisma.user.update({
        where: { id: userId },
        data: {
          name: updateData.name,
          first_name: updateData.first_name,
          last_name: updateData.last_name,
          bio: updateData.bio,
          dob: updateData.dob,
          language: updateData.language,
          region: updateData.region,
          updated_at: new Date(),
        },
      });
      return 'Data updated successfully';
    } catch (error) {
      throw new HttpException(
        error.message || 'Unexpected error occurred',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
