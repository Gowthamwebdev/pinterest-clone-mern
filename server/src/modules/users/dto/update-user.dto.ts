import { IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(2, 50)
  name?: string;


  @IsOptional()
  @IsUrl()
  profile_img?: string;

  @IsOptional()
  @IsString()
  @Length(0, 50)
  bio?: string;

  
}