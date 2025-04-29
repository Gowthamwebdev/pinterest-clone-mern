import { IsEmail, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsOptional()
  profile_img?: string;
}

export class LoginDto {


  id: number;
  
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
