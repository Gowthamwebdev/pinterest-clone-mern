import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { CreatePinDto } from './dto/create-pin.dto';
import { PinService } from './pins.service';

@Controller('pins')
export class PinController {
  constructor(private pinService: PinService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async createPin(@Request() req, @Body() createPinDto: CreatePinDto) {
    return await this.pinService.createPin(req.user.userId, createPinDto);
  }
}
