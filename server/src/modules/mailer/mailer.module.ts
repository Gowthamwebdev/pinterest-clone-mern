import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MailerService } from './mailer.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_RESET_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    PrismaModule
  ],
  providers: [MailerService],
  exports: [MailerService],
})
export class MailerModule {}