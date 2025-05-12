import { Controller, Post, Body, UseGuards, Request, UseInterceptors, UploadedFile } from '@nestjs/common';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { CreatePinDto } from './dto/create-pin.dto';
import { PinService } from './pins.service';
import { FileInterceptor } from '@nestjs/platform-express';
import * as Multer from "multer";


@Controller('pins')
export class PinController {
  constructor(private pinService: PinService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  async createPin(
    @Request() req,
    @UploadedFile() image: Multer.File,
    @Body() createPinDto: CreatePinDto,
  ){
    console.log('user Id', req.user.userId, 'data', createPinDto);
    return await this.pinService.createPin(req.user.userId, createPinDto, image);
  }
}
