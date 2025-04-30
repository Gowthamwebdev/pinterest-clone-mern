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

  login(user: LoginDto) {
    try{
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
    await this.prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
        profile_img: userData.profile_img || '',
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
}