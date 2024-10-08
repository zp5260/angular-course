import {Routes} from '@angular/router';

import {resolveUserTasks, TasksComponent} from '../tasks/tasks.component';
import {canLeaveEditPage, NewTaskComponent} from '../tasks/new-task/new-task.component';
import {resolveTitle} from "./user-tasks/user-tasks.component";


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks', // <your-domain>/users/<uid>/tasks
    component: TasksComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      userTasks: resolveUserTasks,
    },
    title: resolveTitle
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage]
  },
];
