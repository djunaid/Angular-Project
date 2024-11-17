import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import  {dummyTasks}  from "../dummy-tasks";
import { NewtaskComponent } from "./newtask/newtask.component";
import { FormGroup } from '@angular/forms';
import { NewTask } from './newtask/newtask.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!:string;
  @Input({required: true}) userId!:string;
  isAddTaskDialogOpen:boolean = false;

  tasks = dummyTasks;

  get SelectedUserTasks(){
    return this.tasks.filter((task) => task.userId == this.userId);
  }

  onTaskComplete(taskId: string){
    this.tasks = this.tasks.filter(task=> task.id != taskId);
  }

  onNewTask(){
    this.isAddTaskDialogOpen = true;
  }

  onTaskAdd(task:NewTask){
    //Task summary will save
    this.tasks.push({
      id: new Date().getTime().toString(),
      title : task.title,
      summary : task.summary,
      dueDate : task.duedate,
      userId : this.userId
    });
    this.isAddTaskDialogOpen = false;
  }

  onCloseTaskDialog(){
    
    this.isAddTaskDialogOpen = false;
  }
 
}
