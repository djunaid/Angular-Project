import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NewTask } from './newtask.model';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  
  @Output() taskSubmit = new EventEmitter<NewTask>()
  @Output() onCancel = new EventEmitter<void>()

  taskForm = new FormGroup({
    title: new FormControl(),
    summary: new FormControl(),
    duedate : new FormControl()
  });
  

  onSubmitTask(){
    console.log("submit clicked");
    
    this.taskSubmit.emit({
      title: this.taskForm.value.title ? this.taskForm.value.title : "N/A",
      summary : this.taskForm.value.summary ? this.taskForm.value.summary : "N/A",
      duedate : this.taskForm.value.duedate ? this.taskForm.value.duedate : new Date().getDate().toString()
  });
  }

  onCancelClick(){
    
    this.onCancel.emit();
  }

  

}
