import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  userLogin(): string {
    return this.authService.userLogin();
  }

  @Post('signup')
  userSignIn(): string {
    return 'user signed in';
  }
}
