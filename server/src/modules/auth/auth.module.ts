import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from 'src/shared/strategies/jwt.strategy';
import { LocalStrategy } from 'src/shared/strategies/local.strategy';
import { MailerModule } from '../mailer/mailer.module';
// import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    MailerModule,
    PrismaModule
  ],
  providers: [
    AuthService, 
    JwtStrategy, 
    LocalStrategy, 
    // PrismaService
  ],
  controllers: [AuthController],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}