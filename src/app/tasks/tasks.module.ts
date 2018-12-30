import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskDetailComponent } from './task-detail.component';
import { TaskListComponent } from './task-list.component';
import { TasksService } from './tasks.service.service';
import { CreateTaskComponent } from './create-task.component';
import { TaskRouteActivatorService } from './task-route-activator.service';

@NgModule({
  declarations: [TaskDetailComponent, TaskListComponent, CreateTaskComponent],
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  providers: [TasksService, TaskRouteActivatorService]
})
export class TasksModule { }
