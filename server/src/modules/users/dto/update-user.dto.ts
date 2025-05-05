import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(1, 100)
  name?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  first_name?: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  last_name?: string;

  @IsOptional()
  @IsString()
  bio?: string;
}
