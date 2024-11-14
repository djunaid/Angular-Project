import { Component, EventEmitter, Input, Output } from '@angular/core';

type User = {
  id: string,
  name: string,
  avatar: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user! : User;
  @Output() selectUser = new EventEmitter();

  get imagePath(){
    return 'assets/'+this.user.avatar;
  }

  onUserSelect(){   
    this.selectUser.emit(this.user.id);
  }  
}