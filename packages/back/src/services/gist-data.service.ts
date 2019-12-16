import { Goal, Idea, StepProject, Task } from "../entities";

export interface GistDataService {

    createGoal(goal: Goal): Goal;
    getGoals(): ReadonlyArray<Goal>;

    createIdea(goalId: string, idea: Idea): Idea;
    getIdeas(): ReadonlyArray<Idea>;
    getIdeasByGoal(goalId: string): ReadonlyArray<Idea>;

    createStepProject(ideaId: string, stepProject: StepProject): StepProject;
    getStepProjects(): ReadonlyArray<StepProject>;
    getStepProjectsByGoal(goalId: string): ReadonlyArray<StepProject>;
    getStepProjectsByIdea(ideaId: string): ReadonlyArray<StepProject>;

    createTask(projectId: string, task: Task): Task;
    getTasks(): ReadonlyArray<Task>;
    getTasksByGoal(goalId: string): ReadonlyArray<Task>;
    getTasksByIdea(ideaId: string): ReadonlyArray<Task>;
    getTasksByStepProject(projectId: string): ReadonlyArray<Task>;
}
