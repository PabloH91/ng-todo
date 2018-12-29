import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list.component';
import { TaskDetailComponent } from './task-detail.component';

const routes: Routes = [
  { path: '', component: TaskListComponent, pathMatch: 'full' },
  { path: ':id', component: TaskDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
