import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewtaskComponent } from "./newtask/newtask.component";
import { NewTask } from './newtask/newtask.model';
import { TaskService} from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent { 

  constructor(private taskService: TaskService){    
  }

  @Input({required: true}) name!:string;
  @Input({required: true}) userId!:string;
  isAddTaskDialogOpen:boolean = false;

 

  get SelectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  onTaskComplete(taskId: string){
    
  }

  onNewTask(){
    this.isAddTaskDialogOpen = true;
  }

  onCloseTaskDialog(){    
    this.isAddTaskDialogOpen = false;
  }
 
}

