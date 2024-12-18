import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { NgClass } from '@angular/common';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgClass, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user! : User;
  @Output() selectUser = new EventEmitter();
  @Input({required:true}) selected!:boolean;

  get imagePath(){
    return 'assets/'+this.user.avatar;
  }

  onUserSelect(){   
    this.selectUser.emit(this.user.id);
  }  
}
