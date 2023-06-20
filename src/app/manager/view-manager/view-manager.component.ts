import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Manager } from 'src/app/model/manager';
import { User } from 'src/app/model/user';
import { Department } from 'src/app/model/department';

@Component({
  selector: 'app-view-manager',
  templateUrl: './view-manager.component.html',
  styleUrls: ['./view-manager.component.css']
})
export class ViewManagerComponent {
  user : User = new User(0, '', '', '');
  department : Department = new Department(0, '');
  manager : Manager = new Manager(0, '', '', '', '', '', this.user, this.department);
  
  constructor(@Inject(MAT_DIALOG_DATA) public data : Manager){
    this.manager = data;
    console.log(this.manager)
  }
}
