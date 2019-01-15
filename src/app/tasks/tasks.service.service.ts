import { Injectable } from '@angular/core';
import { ITask } from './task';

const tasks: ITask[] = [
  {
    id: 1,
    name: 'finish to-do app',
    urgency: 'high',
    description: 'need angularino'
  },
  {
    id: 2,
    name: 'update resume',
    urgency: 'high',
    description: 'need it to apply'
  },
  {
    id: 3,
    name: 'send resume',
    urgency: 'high',
    description: '4coin'
  },
  {
    id: 4,
    name: 'take nap',
    urgency: 'low',
    description: 'helps studying'
  },
  {
    id: 5,
    name: 'learn keyboard',
    urgency: 'medium',
    description: 'for the noodly sounds'
  }
];

@Injectable()
export class TasksService {
  constructor() { }

  getTasks(): ITask[] {
    return tasks;
  }
  getTask(taskId: number): ITask {
    return tasks.find(task => task.id === taskId);
  }
  saveTask(task: ITask) {
    tasks.push(task);
  }
}
