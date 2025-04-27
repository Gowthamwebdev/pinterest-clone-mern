// src/auth/auth.service.ts
import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, SignupDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new NotFoundException('User not found');

    const isValid = await bcrypt.compare(pass, user.password);
    if (!isValid) throw new UnauthorizedException('Invalid password');

    return user;
  }

  async login(userData: LoginDto) {
    const user = await this.validateUser(userData.email, userData.password);
    const payload = { userId: user.id };
    
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async getUserProfile(userId: number) {
    console.log('Fetching profile for user ID:', userId);
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        profile_img: true,
      }
    });
    
    if (!user) {
      throw new NotFoundException('User not found');
    }
    
    return user;
  }

  async signUp(userData: SignupDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await this.prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        profile_img: userData.profile_img || '',
      },
    });

    const { password, ...result } = user;
    return {
      message: 'User created successfully',
      user: result
    };
  }
}