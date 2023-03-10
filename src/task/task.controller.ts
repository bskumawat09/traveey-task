import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  @Get()
  findAllTasks() {
    return this.taskService.findAllTasks();
  }

  @Get(':taskId')
  async findTaskById(@Param('taskId') id: string) {
    const task = await this.taskService.findTaskById(id);
    if (!task) throw new HttpException('Task not found', HttpStatus.NOT_FOUND);

    return task;
  }

  @Patch(':taskId')
  async updateTask(
    @Param('taskId') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    const task = await this.taskService.updateTask(id, updateTaskDto);
    if (!task) throw new HttpException('Task not found', HttpStatus.NOT_FOUND);

    return task;
  }

  @Delete(':taskId')
  removeTask(@Param('taskId') id: string) {
    return this.taskService.removeTask(id);
  }
}
