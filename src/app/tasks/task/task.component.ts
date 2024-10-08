import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [DatePipe, CardComponent],
})
export class TaskComponent {
  task = input.required<Task>();
  private tasksService = inject(TasksService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  onComplete() {
    this.tasksService.removeTask(this.task().id);
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute, //relativna path od kjer smo je treba naštimat
      onSameUrlNavigation: 'reload', // ker glede na to da angularju povem da
      // grem nazaj naa stran na kiri sm, brezz reload tega nebi naredu ker smo že na njej
      queryParamsHandling: 'preserve'
    })
  }
}
