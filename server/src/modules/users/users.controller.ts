import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
  UseGuards,
  Body,
  Request,
} from '@nestjs/common';
import { UserService } from './users.service';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findUserById(id);
  }

  @Put()
  async updateUser(@Body() updateUserDto: UpdateUserDto, @Request() req) {
    return this.userService.updateUser(req.user.userId, updateUserDto);
  }
}
