import {Component, signal, Signal} from '@angular/core';
import {UserComponent} from "./components/user/user.component";
import {HeaderComponent} from "./components/header/header.component";
import {DUMMY_USERS} from "./dummy-users";
import {TasksComponent} from "./components/tasks/tasks.component";
import {NewTaskComponent} from "./components/tasks/new-task/new-task.component";

@Component({
  selector: 'app-root',
  standalone: false,
  // imports: [
  //   UserComponent,
  //   HeaderComponent,
  //   TasksComponent,
  //   NewTaskComponent
  // ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  selectedUserName = signal(" ");

  get selectedUser() {
    return this.users.find(((user) => user.id === this.selectedUserId))
  }

  onSelectUser(id: string) {
    console.log('sel user id', id);
    this.selectedUserId = id;
  }
}
