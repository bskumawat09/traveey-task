import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type EmployeeDoc = HydratedDocument<Employee>;

@Schema()
export class Employee {
  @Prop({ required: true, maxlength: 255 })
  name: string;

  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    maxlength: 320,
  })
  email: string;

  @Prop({ required: true, unique: true, trim: true })
  phone: string;

  @Prop({ required: false, type: Date, default: Date.now() })
  hireDate: Date;

  @Prop({ required: true, maxlength: 255 })
  position: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
