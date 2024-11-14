import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskAssigner';
  activeUser?:string;

  users= DUMMY_USERS

  get SelectedUser(){
    return this.users.find((user)=> user.id === this.activeUser)!;
  }

  onSelectUser(id:string){
    console.log(id);
    this.activeUser = id;
  }
}
