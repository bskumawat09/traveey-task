import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskDoc } from './schema/task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDoc>) {}

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new this.taskModel(createTaskDto);
    return task.save();
  }

  findAll(): Promise<Task[]> {
    return this.taskModel.find();
  }

  findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id);
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true });
  }

  remove(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }

  findAllTasksOfEmployee(id: string) {
    return this.taskModel.find({ employeeId: id });
  }
}
