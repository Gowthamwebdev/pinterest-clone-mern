import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PinModule } from './modules/pins/pins.module';
import { MailerModule } from './modules/mailer/mailer.module';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { UserModule } from './modules/users/users.module';

@Module({
  imports: [AuthModule, PinModule, PrismaModule, MailerModule, UserModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggerMiddleware)
        .forRoutes('*');
  }
}