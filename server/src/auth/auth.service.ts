import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  userLogin(): string {
    return 'User logged in';
  }
}
