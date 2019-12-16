/* eslint-disable */

import DynamoDB = require('aws-sdk/clients/dynamodb');
import { GistDataService } from "./gist-data.service";
import {
    Goal,
    Idea,
    StepProject,
    Task
} from '../entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamoDBService implements GistDataService {

    private readonly db: DynamoDB;

    public constructor(db: DynamoDB) {
        this.db = db;
    }

    createGoal(goal: Goal): Goal {
        throw new Error("Method not implemented.");
    }    
    createIdea(goalId: string, idea: Idea): Idea {
        throw new Error("Method not implemented.");
    }
    createStepProject(ideaId: string, stepProject: StepProject): StepProject {
        throw new Error("Method not implemented.");
    }
    createTask(projectId: string, task: Task): Task {
        throw new Error("Method not implemented.");
    }
    getGoals(): readonly Goal[] {
        throw new Error("Method not implemented.");
    }
    getIdeas(): readonly Idea[] {
        throw new Error("Method not implemented.");
    }
    getIdeasByGoal(goalId: string): readonly Idea[] {
        throw new Error("Method not implemented.");
    }
    getStepProjects(): readonly StepProject[] {
        throw new Error("Method not implemented.");
    }
    getStepProjectsByGoal(goalId: string): readonly StepProject[] {
        throw new Error("Method not implemented.");
    }
    getStepProjectsByIdea(ideaId: string): readonly StepProject[] {
        throw new Error("Method not implemented.");
    }
    getTasks(): readonly Task[] {
        throw new Error("Method not implemented.");
    }
    getTasksByGoal(goalId: string): readonly Idea[] {
        throw new Error("Method not implemented.");
    }
    getTasksByIdea(ideaId: string): readonly Idea[] {
        throw new Error("Method not implemented.");
    }
    getTasksByStepProject(projectId: string): readonly Idea[] {
        throw new Error("Method not implemented.");
    }
}