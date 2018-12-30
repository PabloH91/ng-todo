import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { TasksService } from './tasks.service.service';

@Injectable()
export class TaskRouteActivatorService implements CanActivate {

  constructor(private tasksService: TasksService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const taskId: number = +route.params['id'];
    const taskFound = !!this.tasksService.getTask(taskId);

    // todo: redirect to a 404 when task is not found?
    if (!taskFound) { this.router.navigate(['tasks']); }
    return taskFound;
  }
}
