import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument, Types } from 'mongoose';
import { Employee } from 'src/employee/schema/employee.schema';

export type TaskDoc = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({ required: true, maxlength: 255 })
  title: string;

  @Prop({ required: true, maxlength: 320 })
  description: string;

  @Prop({ required: true, type: Date })
  dueDate: Date;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Employee' })
  employeeId: Employee;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
