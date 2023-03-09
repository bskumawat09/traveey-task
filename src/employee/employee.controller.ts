import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { TaskService } from 'src/task/task.service';

@Controller('employees')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly taskService: TaskService,
  ) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':employeeId')
  findOne(@Param('employeeId') id: string) {
    return this.employeeService.findOne(id);
  }

  @Patch(':employeeId')
  update(
    @Param('employeeId') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  @Delete(':employeeId')
  remove(@Param('employeeId') id: string) {
    return this.employeeService.remove(id);
  }

  @Get('/:employeeId/tasks')
  findAllTasksOfEmployee(@Param('employeeId') id: string) {
    return this.taskService.findAllTasksOfEmployee(id);
  }
}
