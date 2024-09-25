import {Component, computed, Input, output} from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  select = output<string>();

  imagePath = computed(() => {
  return 'assets/users/' + this.user.avatar;
  })

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
