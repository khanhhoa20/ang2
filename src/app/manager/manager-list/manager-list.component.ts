import { Component, OnInit } from '@angular/core';
import { Manager } from 'src/app/model/manager';
import { ManagerService } from 'src/app/service/manager.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { ViewManagerComponent } from '../view-manager/view-manager.component';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit{
  displayedColumns: string[] = ['Phone', 'Address', 'Email', 'Name', 'Username', 'Department', 'Status', 'Action'];
  managers : Manager[] = [];
  clickedRows = new Set<Manager>();
  constructor (private managerService : ManagerService,
              private router: Router,
              private dialogRef: MatDialog){}

  ngOnInit(): void {
    this.getManagers();
  }

  private getManagers(){
    this.managerService.getManagerList().subscribe(data =>{
      this.managers = data;
    });
  }

  viewManager(id : number){
    this.managerService.getManagerById(id).subscribe(data2 =>{
      this.dialogRef.open(ViewManagerComponent, { data : data2});
    });
    
  }

  updateManager(event : MouseEvent, id ?: number){
    event.stopPropagation();
    this.router.navigate(['/manager/update-manager', id]);
  }

  deleteManager(event : MouseEvent, id ?: number){
    event.stopPropagation();
    const dialogRef = this.dialogRef.open(DeleteConfirmComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.managerService.deleteManager(id).subscribe(data =>{
          this.getManagers();
          this.dialogRef.open(PopUpComponent, { data : 'Delete manager successfully!'});
        });
      }
    });
  }
}
