import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './users.service';
import { Public } from '../../shared/decorators/public.decorator';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUserById(id);
  }

  @UseGuards(JwtAuthGuard)
  async editUserDetails() {}
}
