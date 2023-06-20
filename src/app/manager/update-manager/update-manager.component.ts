import { Component } from '@angular/core';
import { Manager } from 'src/app/model/manager';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/service/manager.service';
import { User } from 'src/app/model/user';
import { Department } from 'src/app/model/department';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update-manager',
  templateUrl: './update-manager.component.html',
  styleUrls: ['./update-manager.component.css']
})
export class UpdateManagerComponent {

  id : number = 0;
  user : User = new User(0, '', '', '');
  department : Department = new Department(0, '');
  manager : Manager = new Manager(0, '', '', '', '', '', this.user, this.department);
  
  userList : User[] = [];
  departmentList : Department[] = [];

  constructor(private managerService : ManagerService,
              private route:ActivatedRoute,
              private dialogRef: MatDialog,
              private router:Router){}

  ngOnInit():void{
    this.getListUsers();
    this.getListDepartments();
    this.id = this.route.snapshot.params['id'];
    this.managerService.getManagerById(this.id).subscribe(data =>{
      this.manager = data;
    });
  }

  private getListUsers(){
    this.managerService.getUserHaveNotBeenChosen().subscribe(data =>{
      this.userList = data;
    });
  }

  private getListDepartments(){
    this.managerService.getDepartmentHaveNotBeenChosen().subscribe(data =>{
      this.departmentList = data;
    });
  }

  onSubmit(){
    this.managerService.getUserByUsername(this.manager.user.userName).subscribe(data =>{
      this.manager.user = data;
    });
    this.managerService.getDepartmentById(this.manager.department.departmentId).subscribe(data =>{
      this.manager.department = data;
    });
    this.managerService.updateManager(this.id, this.manager).subscribe(data =>{
      this.router.navigate(['manager/list']);
      this.dialogRef.open(PopUpComponent, { data : 'Update manager successfully!'});
    });
  }
}
