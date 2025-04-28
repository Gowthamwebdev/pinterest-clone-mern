// src/app.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PinModule } from './pins/pins.module';

@Module({
  imports: [AuthModule, PinModule, PrismaModule],
})
export class AppModule {}