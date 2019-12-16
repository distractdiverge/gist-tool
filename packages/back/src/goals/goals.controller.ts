import { Controller, Get, Post, HttpCode, HttpStatus, Param, Body } from '@nestjs/common';
import { Goal } from '../entities';

@Controller('goals')
export class GoalsController {
    
    @HttpCode(HttpStatus.OK)
    @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
    @Get()
    findAll(): readonly Goal[] {
        return [
            {
                id: '1',
                name: 'Goal 1',
                description: 'Some Goal Description',
            },
            {
                id: '2',
                name: 'Goal 2',
                description: 'Some Goal Description',
            }
        ];
    }

    @HttpCode(HttpStatus.OK)
    @HttpCode(HttpStatus.NOT_FOUND)
    @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
    @Get(':id')
    findOne(@Param('id') id: string): Goal {
        return {
            id,
            name: 'Bogus',
            description: 'Some Goal Description'
        };
    }

    @HttpCode(HttpStatus.CREATED)
    @HttpCode(HttpStatus.BAD_REQUEST)
    @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
    @Post()
    create(@Body() goal: GoalCreationRequest): Goal {
        return {
            id: 'new-id',
            name: goal.name,
            description: goal.description,
        };
    }
};

export interface GoalCreationRequest {
    name: string;
    description: string;
}