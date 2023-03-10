import {
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @IsDateString()
  @IsOptional()
  hireDate: Date;

  @IsNotEmpty()
  @IsString()
  position: string;
}
