import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument, Types } from 'mongoose';
import { Employee } from 'src/employee/schema/employee.schema';

export type TaskDoc = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: Date })
  dueDate: Date;

  @Prop({ required: true, type: Types.ObjectId, ref: 'Employee' })
  employeeId: Employee;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
