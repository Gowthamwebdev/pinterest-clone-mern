import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/auth.dto';
import LocalAuthGuard from 'src/shared/guards/local-auth.guard';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { Public } from 'src/shared/decorators/public.decorator';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req) { 
    console.log('controller ',req.user);
    return this.authService.login(req.user);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req) {
    return this.authService.getUserProfile(req.user.userId);
  }

  @Post('signup')
  async signUp(@Body() signupDto: SignupDto) {
    return this.authService.signUp(signupDto);
  }
}