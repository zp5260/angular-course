import {CanMatchFn, RedirectCommand, Router, Routes} from "@angular/router";
import {NoTaskComponent} from "./tasks/no-task/no-task.component";
import {resolveUserName, UserTasksComponent} from "./users/user-tasks/user-tasks.component";
import {NotFoundComponent} from "./not-found/not-found/not-found.component";
import {routes as userRoutes} from "./users/users.routes"
import {inject} from "@angular/core";

const dummyCanMatch: CanMatchFn= (route, segments
) => {
  const router = inject(Router);
  return true;
  // const shouldGetAcces = Math.random();
  // if (shouldGetAcces < 0.5) {
  //   return true;
  // }
 // return new RedirectCommand(router.parseUrl('/unauthorized'));
}


export const routes: Routes = [
  {
    path: '', // <your-domain>/tasks
    component: NoTaskComponent
  },
  {
    path: 'users/:userId', // <your-domain>/tasks
    component: UserTasksComponent,
    children: userRoutes,
    canMatch: [dummyCanMatch],
    data: {
      message: 'Hello!'
    },
    resolve: {
      userName: resolveUserName
    }
  },
  {
    path: '**', //<your-domain>/users/<uid>/tasks/new
    component: NotFoundComponent
  }
]
