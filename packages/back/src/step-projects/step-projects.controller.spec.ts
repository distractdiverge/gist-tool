import { Test, TestingModule } from '@nestjs/testing';
import { StepProjectsController } from './step-projects.controller';

describe('StepProjects Controller', () => {
  let controller: StepProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StepProjectsController],
    }).compile();

    controller = module.get<StepProjectsController>(StepProjectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
