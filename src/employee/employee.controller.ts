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
  async createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    try {
      const employee = await this.employeeService.createEmployee(
        createEmployeeDto,
      );
      return employee;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  findAllEmployees() {
    return this.employeeService.findAllEmployees();
  }

  @Get(':employeeId')
  async findEmployeeById(@Param('employeeId') id: string) {
    const employee = await this.employeeService.findEmployeeById(id);
    if (!employee)
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);

    return employee;
  }

  @Patch(':employeeId')
  async updateEmployee(
    @Param('employeeId') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    const employee = await this.employeeService.updateEmployee(
      id,
      updateEmployeeDto,
    );
    if (!employee)
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);

    return employee;
  }

  @Delete(':employeeId')
  removeEmployee(@Param('employeeId') id: string) {
    return this.employeeService.removeEmployee(id);
  }

  @Get('/:employeeId/tasks')
  async findAllTasksOfEmployee(@Param('employeeId') id: string) {
    const employee = await this.employeeService.findEmployeeById(id);
    if (!employee)
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);

    return this.taskService.findAllTasksOfEmployee(id);
  }
}
