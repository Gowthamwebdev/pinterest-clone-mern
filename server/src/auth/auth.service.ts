import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { PrismaService } from 'src/prisma/prisma.service';
import { UnauthorizedException, NotFoundException } from '@nestjs/common';
import { SignupDto } from './dto/auth.dto';
dotenv.config();

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly prisma: PrismaService
  ) {}
   async userLogin(userData: {
    email: string,
    password: string
   }) {
    const { email, password } = userData;
    const user = await this.prisma.user.findUnique({where: { email }});
    if (!user) throw new NotFoundException('User not found');
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) throw new UnauthorizedException('Invalid password');

    const accessToken = jwt.sign(
      {userId: user.id},
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )  
    return {
      message: 'Login successful',
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        profile_img: user.profile_img,
      },
    };
    
  }

  async userSignUp(userData: SignupDto): Promise<any> {
    const { name, email, password, profile_img } = userData;
    const user = await this.prisma.user.findUnique({where: { email }});
    if (user) {
      throw new UnauthorizedException('User already exists');
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const createdUser = await this.prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        profile_img: profile_img || 'null',
      },
    });
  
    return {
      message: 'User created successfully',
      user: {
        id: createdUser.id,
        email: createdUser.email,
        name: createdUser.name,
        profile_img: createdUser.profile_img,
      },
    };
    
  }
}