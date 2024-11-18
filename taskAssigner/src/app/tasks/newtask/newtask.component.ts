import { Component, EventEmitter, inject, Input, output, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NewTask } from './newtask.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  
  @Input({required: true}) userId!:string  
  @Output() close = new EventEmitter<void>()
  private taskService = inject(TaskService)

  taskForm = new FormGroup({
    title: new FormControl(),
    summary: new FormControl(),
    duedate : new FormControl()
  });
  

  onSubmitTask(){
    console.log("submit clicked");
    
    this.taskService.addTask({
      title : this.taskForm.value.title,
      summary : this.taskForm.value.summary,
      duedate : this.taskForm.value.duedate ? this.taskForm.value.duedate : new Date(Date.now()).toLocaleString()
    },this.userId);

    this.close.emit();
  }

  onCancelClick(){
    
    this.close.emit();
  }

  

}
