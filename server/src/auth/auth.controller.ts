import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, SignupDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UsePipes(new ValidationPipe())
  userLogin(@Body() loginDto: LoginDto) {
    return this.authService.userLogin(loginDto);
  }

  @Post('signup')
  @UsePipes(new ValidationPipe())
  userSignUp(@Body() signupDto: SignupDto) {
    const userData = { ...signupDto, user_id: 'generated_user_id' };
    return this.authService.userSignUp(userData);
  }
}
