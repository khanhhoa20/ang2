import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/model/manager';
import { ManagerService } from 'src/app/service/manager.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { User } from 'src/app/model/user';
import { Department } from 'src/app/model/department';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit{

  user : User = new User(0, '', '', '');
  department : Department = new Department(0, '');
  manager : Manager = new Manager(0, '', '', '', '', '', this.user, this.department);

  managerList : Manager[] = [];
  userList : User[] = [];
  departmentList : Department[] = [];

  constructor(private managerService : ManagerService,
              private router:Router,
              private dialogRef: MatDialog){}

  ngOnInit():void{
    this.getManagers();
    this.getListUsers();
    this.getListDepartments();
    
  }

  private getManagers(){
    this.managerService.getManagerList().subscribe(data =>{
      this.managerList = data;
      console.log(this.managerList.map(manager => manager.user.userID))
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

  saveManager(){
    console.log(this.manager);
    this.managerService.addManager(this.manager).subscribe(() => {
      this.router.navigate(['manager/list']);
      this.dialogRef.open(PopUpComponent, { data : 'Add manager successfully!'});
    });

  }

  onSubmit(){ 
    this.managerService.getUserByUsername(this.manager.user.userName).subscribe(data =>{
      this.manager.user = data;
    });
    this.managerService.getDepartmentById(this.manager.department.departmentId).subscribe(data =>{
      this.manager.department = data;
    });
    this.saveManager(); 
  }
}
