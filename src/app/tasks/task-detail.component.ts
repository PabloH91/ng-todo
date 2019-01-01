import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from './tasks.service.service';
import { ITask } from './task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: ITask;
  constructor(private router: ActivatedRoute, private tasksService: TasksService) { }

  ngOnInit() {
    const taskId = +this.router.snapshot.params['id'];
    this.task = this.tasksService.getTask(taskId);
  }
}
