import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list.component';
import { TaskDetailComponent } from './task-detail.component';
import { CreateTaskComponent } from './create-task.component';
import { TaskRouteActivatorService } from './task-route-activator.service';

const routes: Routes = [
  { path: 'new', component: CreateTaskComponent },
  { path: ':id', component: TaskDetailComponent, canActivate: [TaskRouteActivatorService] },
  { path: '', component: TaskListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
