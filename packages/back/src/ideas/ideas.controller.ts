import { Controller, HttpCode, HttpStatus, Get, Param, Post, Body } from '@nestjs/common';
import { IIdea } from '../entities';

@Controller('ideas')
export class IdeasController {
    @HttpCode(HttpStatus.OK)
    @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
    @Get()
    findAll(): readonly IIdea[] {
        return [
            {
                id: '1',
                name: 'Idea 1',
                description: 'Some Description',
            },
            {
                id: '2',
                name: 'Idea 2',
                description: 'Some Other Description',
            }
        ];
    }

    @HttpCode(HttpStatus.OK)
    @HttpCode(HttpStatus.NOT_FOUND)
    @HttpCode(HttpStatus.INTERNAL_SERVER_ERROR)
    @Get(':id')
    findOne(@Param('id') id: string): IIdea {
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
    create(@Body() idea: IdeaCreationRequest): IIdea {
        return {
            id: 'new-id',
            name: idea.name,
            description: idea.description,
        };
    }
}

export interface IdeaCreationRequest {
    name: string;
    description: string;
}