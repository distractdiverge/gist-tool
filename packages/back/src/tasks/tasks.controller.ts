import { Controller, HttpCode, HttpStatus, Get, Param, Post, Body } from '@nestjs/common';
import { Task } from '../entities';

@Controller('tasks')
export class TasksController {
    @HttpCode(HttpStatus.OK)
    @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
    @Get()
    findAll(): readonly Task[] {
        return [
            {
                id: '1',
                name: 'Task 1',
                description: 'Some Description',
            },
            {
                id: '2',
                name: 'Task 2',
                description: 'Some Other Description',
            }
        ];
    }

    @HttpCode(HttpStatus.OK)
    @HttpCode(HttpStatus.NOT_FOUND)
    @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
    @Get(':id')
    findOne(@Param('id') id: string): Task {
        return {
            id,
            name: 'Bogus',
            description: 'Some Description'
        };
    }

    @HttpCode(HttpStatus.CREATED)
    @HttpCode(HttpStatus.BAD_REQUEST)
    @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
    @Post()
    create(@Body() task: TaskCreationRequest): Task {
        return {
            id: 'new-id',
            name: task.name,
            description: task.description,
        };
    }    
}

export interface TaskCreationRequest {
    name: string; 
    description: string;
}
