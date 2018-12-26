import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskDetailComponent } from './task-detail.component';
import { TaskListComponent } from './task-list.component';

@NgModule({
  declarations: [TaskDetailComponent, TaskListComponent],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
