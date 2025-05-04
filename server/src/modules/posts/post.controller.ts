import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  UseInterceptors,
  UploadedFile,
  Get,
  Param,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { PinService } from './post.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('pins')
export class PostController {
  constructor(private pinService: PinService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('image'))
  @UsePipes(new ValidationPipe({ transform: true }))
  async createPin(
    @Request() req,
    @UploadedFile() image: Express.Multer.File,
    @Body() createPinDto: CreatePostDto,
  ) {
    return this.pinService.createPost(req.user.userId, createPinDto, image);
  }

  @Get()
  async getAllPins() {
    return await this.pinService.getAllPins();
  }

  @Get(':pinId')
  async getPinById(@Param('pinId', ParseIntPipe) pinId: number) {
    return await this.pinService.getPinById(pinId);
  }
}
