import { Injectable } from '@angular/core';
import { Task } from './task';

const tasks: Task[] = [
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

  getTasks(): Task[] {
    return tasks;
  }
  getTask(taskId: number): Task[] {
    return tasks.filter(task => task.id === taskId);
  }
}
