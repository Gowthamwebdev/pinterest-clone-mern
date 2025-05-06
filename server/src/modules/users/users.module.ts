import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import { CLOUDINARY_FILE_SIZE } from 'src/shared/utils/constants';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    MulterModule.register({
      limits: { fileSize: CLOUDINARY_FILE_SIZE },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
