import {
  Controller,
  Post,
  Put,
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
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';
import { UpdatePostDto } from './dto/update-post.dto';
import { SearchQueryDto } from './dto/search-query.dto';

@Controller('posts')
@UseGuards(JwtAuthGuard)
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  @UsePipes(new ValidationPipe({ transform: true }))
  async createPost(
    @Request() req,
    @UploadedFile() image: Express.Multer.File,
    @Body() createPinDto: CreatePostDto,
  ) {
    return this.postService.createPost(req.user.userId, createPinDto, image);
  }

  @Get()
  async getAllPosts() {
    return await this.postService.getAllPosts();
  }

  @Get('search/')
  async searchPinsByTag(@Query() queryDto: SearchQueryDto) {
    console.log(queryDto.query);
    return this.postService.searchPinsByTag(queryDto.query);
  }

  @Get(':pinId')
  async getPostById(@Param('pinId', ParseIntPipe) pinId: number) {
    return await this.postService.getPostById(pinId);
  }

  @Put(':pinId')
  @UsePipes(new ValidationPipe({ transform: true }))
  async editPostById(
    @Request() req,
    @Param('pinId', ParseIntPipe) pinId: number,
    @Body() updateData: UpdatePostDto,
  ) {
    return await this.postService.editPostById({
      userId: req.user.userId,
      pinId,
      updateData,
    });
  }

  @Delete(':pinId')
  async deletePin(@Request() req, @Param('pinId', ParseIntPipe) pinId: number) {
    return await this.postService.deletePostById({
      userId: req.user.userId,
      pinId,
    });
  }

  @Post(':pinId/restore')
  async restorePin(
    @Request() req,
    @Param('pinId', ParseIntPipe) pinId: number,
  ) {
    return await this.postService.restorePostById({
      userId: req.user.userId,
      pinId,
    });
  }
}
