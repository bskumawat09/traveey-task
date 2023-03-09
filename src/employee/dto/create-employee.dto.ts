import {
  IsNotEmpty,
  IsDate,
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsOptional,
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

  @IsDate()
  @IsOptional()
  hireDate: Date;

  @IsNotEmpty()
  @IsString()
  position: string;
}
