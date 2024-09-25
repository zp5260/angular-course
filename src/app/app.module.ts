import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {UserComponent} from "./components/user/user.component";
import {HeaderComponent} from "./components/header/header.component";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "./components/shared/shared.module";
import {TasksModule} from "./components/tasks/tasks.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    TasksModule
  ]
})
export class AppModule{}
