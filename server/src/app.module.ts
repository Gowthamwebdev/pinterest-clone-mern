import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PinModule } from './pins/pins.module';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [AuthModule, PinModule, PrismaModule, MailerModule],
})
export class AppModule {}