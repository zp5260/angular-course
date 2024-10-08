import {Component, computed, DestroyRef, inject, input, OnInit, signal} from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import {TasksService} from "./tasks.service";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent implements OnInit{
  userId = input.required<string>();
  //order = input<'asc' | 'desc'>();
  order= signal<'asc' | 'desc'>('desc')
  private tasksService = inject(TasksService);
  userTasks = computed(() => this.tasksService.allTasks()
    .filter(task => task.userId === this.userId())
    .sort((a, b) => {
      if (this.order() == 'desc') {
        return a.id > b.id ? -1 : 1
      } else {
        return a.id > b.id ? 1: -1
      }
    })
  );

  // ker mamo subs je treba poklinat
  private destroyRef = inject(DestroyRef);

  private activatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    // tu se vedno avtomatsko poseta this order na zadnji paramsorder
    const subscription = this.activatedRoute.queryParams.subscribe({
      next: params => this.order.set(params['order'])
    })
    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }
}
