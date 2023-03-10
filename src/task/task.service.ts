import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskDoc } from './schema/task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDoc>) {}

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new this.taskModel(createTaskDto);
    return task.save();
  }

  findAllTasks(): Promise<Task[]> {
    return this.taskModel.find();
  }

  findTaskById(id: string): Promise<Task> {
    return this.taskModel.findById(id);
  }

  updateTask(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true });
  }

  removeTask(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }

  findAllTasksOfEmployee(id: string) {
    return this.taskModel.find({ employeeId: id });
  }
}
