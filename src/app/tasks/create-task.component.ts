import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TasksService } from './tasks.service.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  taskForm: FormGroup;
  constructor(private taskService: TasksService) { }

  saveTask() {
    this.taskService.saveTask(this.taskForm.value);
  }

  ngOnInit() {
    const taskName = new FormControl();
    const taskUrgency = new FormControl();
    const taskDateDue = new FormControl();
    const taskDescription = new FormControl();

    this.taskForm = new FormGroup({
      name: taskName,
      urgency: taskUrgency,
      dateDue: taskDateDue,
      description: taskDescription
    });
  }

}
