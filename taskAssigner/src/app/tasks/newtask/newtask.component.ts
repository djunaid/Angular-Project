import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})
export class NewtaskComponent {
  taskSummary?:string
  @Output() taskSubmit = new EventEmitter<string>()
  

  onSubmitTask(){
    this.taskSubmit.emit(this.taskSummary);
  }

  

}
