import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskDetailComponent } from './task-detail.component';
import { TaskListComponent } from './task-list.component';
import { TasksService } from './tasks.service.service';

@NgModule({
  declarations: [TaskDetailComponent, TaskListComponent],
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  providers: [TasksService]
})
export class TasksModule { }
