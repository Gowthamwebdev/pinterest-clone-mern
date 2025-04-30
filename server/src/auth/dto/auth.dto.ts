import { IsEmail, IsNotEmpty, MinLength, Matches } from 'class-validator';

export class SignupDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @Matches(/^\d{2}-\d{2}-\d{4}$/, {
    message: 'dob must be in DD-MM-YYYY format'
  })
  @IsNotEmpty()
  dateOfBirth: string;

}

export class LoginDto {


  id: number;
  
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
