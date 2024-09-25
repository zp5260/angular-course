import {Component, Input} from '@angular/core';
import {NewTaskData} from "../../models/task.model";
import {TasksService} from "./tasks.service";


@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService) {
  }



  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.userId);
  }



  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddingTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasksService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }
}
