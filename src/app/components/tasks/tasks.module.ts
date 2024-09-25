import {NgModule} from "@angular/core";
import {TaskComponent} from "./task/task.component";
import {TasksComponent} from "./tasks.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TaskComponent,
    TasksComponent,
    NewTaskComponent
  ],
  exports: [TasksComponent],
  imports: [SharedModule, CommonModule, FormsModule]
})
export class TasksModule{}
