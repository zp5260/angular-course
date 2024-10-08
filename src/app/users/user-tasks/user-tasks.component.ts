import {Component, computed, DestroyRef, inject, input, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot
} from "@angular/router";

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [
    RouterOutlet,
    RouterLink
  ]
})
export class UserTasksComponent{
  userName = input.required<string>();
  message = input.required<string>();
 //  userId = input.required<string>();
 //  private  usersService = inject(UsersService);
 //  private activatedRoute = inject(ActivatedRoute);
 //
 //  private destroyRef = inject(DestroyRef);
 //
 //  // userName = computed(() =>
 //  //   this.usersService.users.find(u => u.id === this.userId())?.name);
 // // userName: string | undefined;
 //
 //  ngOnInit() {
 //    const subscription = this.activatedRoute.paramMap.subscribe( {
 //        next: paramMap => {
 //          this.userName = this.usersService.users.find(u =>  u.id === paramMap.get('userId'))?.name || '';
 //        }
 //      }
 //    );
 //
 //    this.destroyRef.onDestroy(() => subscription.unsubscribe())
 //  }
}

export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) =>  {
  // lahko tudi  v resolve funkcije injectamo service
  const usersService = inject(UsersService);
  const userName = usersService.users.find(u =>  u.id === activatedRoute.paramMap.get('userId'))?.name || '';

  return userName
};
