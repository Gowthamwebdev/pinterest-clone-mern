import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto, SignupDto } from './dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, pass: string): Promise<any> {
    try {
      const user = await this.prisma.user.findUnique({ where: { email } });
      if (!user) throw new NotFoundException('User not found');

      const isValid = await bcrypt.compare(pass, user.password);
      if (!isValid) throw new UnauthorizedException('Invalid password');

      return user;
    } catch (error) {
      throw new NotFoundException('Unexpected error occured: ', error.message);
    }
  }

  async login(userData: LoginDto) {
    try {
      const user = await this.validateUser(userData.email, userData.password);
      if (!user) {
        throw new HttpException('user not found', HttpStatus.NOT_FOUND);
      }
      const payload = {
        sub: user.id,
        userId: user.id,
      };
      console.log(payload);
      return {
        message: 'user logged in successfully',
        token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw new NotFoundException('Unexpected error occured: ', error.message);
    }
  }

  async getUserProfile(userId: number) {
    try {
      console.log('Fetching profile for user ID:', userId);
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          email: true,
          profile_img: true,
        },
      });

      if (!user) {
        throw new HttpException('user not found', HttpStatus.NOT_FOUND);
      }

      return user;
    } catch (error) {
      throw new NotFoundException('Unexpected error occured: ', error.message);
    }
  }

  async signUp(userData: SignupDto) {
    try {
      console.log(userData.email, userData.dateOfBirth, userData.password);
      const existingUser = await this.prisma.user.findUnique({
        where: { email: userData.email },
      });
      // console.log(existingUser);

      if (existingUser) {
        throw new HttpException('User already exists', HttpStatus.CONFLICT);
      }

      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const username = userData.email.split('@')[0];
      const isoDate = new Date(userData.dateOfBirth).toISOString();
      await this.prisma.user.create({
        data: {
          name: username.toLowerCase().replace(/[^a-z0-9]/g, ''),
          email: userData.email,
          password: hashedPassword,
          dob: isoDate,
        },
      });
      return {
        message: 'User created successfully',
      };
    } catch (error) {
      throw new HttpException(
        'Unexpected error occurred',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async resetPassword(token: string, newPassword: string) {
    try {
      const payload = this.jwtService.verify(token);

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await this.prisma.user.update({
        where: { email: payload.email },
        data: { password: hashedPassword },
      });
      console.log('reset password functioned successfully');
      return {
        message: 'Password changes successfully',
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Unexpected error occured',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
