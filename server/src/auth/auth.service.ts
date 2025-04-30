// src/auth/auth.service.ts
import { Injectable, UnauthorizedException, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
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
    try{
      const user = await this.prisma.user.findUnique({ where: { email } });
      if (!user) throw new NotFoundException('User not found');
  
      const isValid = await bcrypt.compare(pass, user.password);
      if (!isValid) throw new UnauthorizedException('Invalid password');
  
      return user;
    }
    catch(error){
      throw new NotFoundException('Unexpected error occured: ', error.message);
    }
  }

  async login(userData: LoginDto) {
    try{
      const user = await this.validateUser(userData.email, userData.password);
      if(!user){
        throw new HttpException('user not found', HttpStatus.NOT_FOUND);
      }
      const payload = { 
        sub: user.id,  
        userId: user.id 
      };    
      return {
        token: this.jwtService.sign(payload),
      };
    }
    catch(error){
      throw new NotFoundException('Unexpected error occured: ', error.message);
    }
  }

  async getUserProfile(userId: number) {
    try{
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
        throw new HttpException('user not found', HttpStatus.NOT_FOUND);
      }
      
      return user;
    }
    catch(error){
        throw new NotFoundException('Unexpected error occured: ', error.message);
    }
  }

  async signUp(userData: SignupDto) {
   try{
    const existingUser = await this.prisma.user.findUnique({
      where: { email: userData.email },
    });

    if (existingUser) {
      throw new UnauthorizedException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const username = userData.email.split('@')[0];
    const [day, month, year] = userData.dob.split('-');
    const isoDate = new Date(`${year}-${month}-${day}`).toISOString();

    await this.prisma.user.create({
      data: {
        name: username.toLowerCase().replace(/[^a-z0-9]/g, ''),
        email: userData.email,
        password: hashedPassword,
        dob: isoDate,
      },
    });

    return {
      message: 'User created successfully'
    };
   }
   catch(error){
    throw new NotFoundException('Unexpected error occured: ', error.message);
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
      console.log('reset password functioned successfully')
      return {
        message: 'Password changes successfully'
      };
    } catch (error) {
      console.log(error);
      throw new HttpException('Unexpected error occured', HttpStatus.BAD_REQUEST);
    }
  }

}