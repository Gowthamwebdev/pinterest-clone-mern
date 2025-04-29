import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class CreatePinDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  image_url: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];
}