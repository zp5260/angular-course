import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TasksService } from '../tasks.service';
import {CanDeactivateFn, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  submitted = false;
  private tasksService = inject(TasksService);
  private routerService = inject(Router);

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId()
    );
    this.submitted = true;
    this.routerService.navigate(['/users', this.userId(), 'tasks'], {
      replaceUrl: true
    })
  }
}

// <> da poveš a kiro komponento bo to tied
export const canLeaveEditPage: CanDeactivateFn<NewTaskComponent> = (component) => {
  if (component.submitted) return true;
  if (component.enteredTitle() || component.enteredDate() || component.enteredSummary()) {
    // user dal data, torej mogoče noče še nazaj - damo še confirmation dialog
    return window.confirm('Do you really want to leave? You will lose the entered data.')
  }
  return true;
}
