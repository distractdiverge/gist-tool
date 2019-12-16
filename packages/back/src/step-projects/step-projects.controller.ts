import { Controller, HttpCode, HttpStatus, Get, Param, Post, Body } from '@nestjs/common';
import { StepProject } from '../entities';

@Controller('step-projects')
export class StepProjectsController {
    @HttpCode(HttpStatus.OK)
    @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
    @Get()
    findAll(): readonly StepProject[] {
        return [
            {
                id: '1',
                name: 'Step Project 1',
                description: 'Some Description',
            },
            {
                id: '2',
                name: 'Step Project 2',
                description: 'Some Other Description',
            }
        ];
    }

    @HttpCode(HttpStatus.OK)
    @HttpCode(HttpStatus.NOT_FOUND)
    @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
    @Get(':id')
    findOne(@Param('id') id: string): StepProject {
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
    create(@Body() stepProject: StepProjectCreationRequest): StepProject {
        return {
            id: 'new-id',
            name: stepProject.name,
            description: stepProject.description,
        };
    }    
}

export interface StepProjectCreationRequest {
    name: string;
    description: string;
}