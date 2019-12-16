import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoalsController } from './goals/goals.controller';
import { IdeasController } from './ideas/ideas.controller';
import { StepProjectsController } from './step-projects/step-projects.controller';
import { TasksController } from './tasks/tasks.controller';
import { ConfigService } from './config/config.service';

@Module({
  imports: [],
  controllers: [AppController, GoalsController, IdeasController, StepProjectsController, TasksController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
