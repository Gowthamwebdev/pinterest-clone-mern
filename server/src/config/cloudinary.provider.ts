import { v2 as Cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: (configService: ConfigService) => {
    Cloudinary.config(configService.get('CLOUDINARY_URL'));
    return Cloudinary;
  },
  inject: [ConfigService],
};
