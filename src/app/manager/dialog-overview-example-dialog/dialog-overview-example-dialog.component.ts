import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BankAccount } from 'src/app/model/bank-account';
import { ManagerService } from 'src/app/service/manager.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
interface DialogData {
  animal: string;
  name: string;
}

interface Bank {
  value: string;
  bankName: string;
}
interface Status {
  value: string;
  lockStatus: string;
}
@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BankAccount,
    private bankAccountService: ManagerService,
    public dialogRef1: MatDialog
  ) {}
  bankAccount: BankAccount = this.data;

  banks: Bank[] = [
    {value: 'TPBank', bankName: 'TPBank'},
    {value: 'AriBankncc', bankName: 'AriBankncc'},
    {value: 'AriBankncc', bankName: 'VietcomBank'},
  ];
  status: Status[]= [
    {value: 'Lock', lockStatus: 'Lock'},
    {value: 'Active', lockStatus: 'Active'}
  ]

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateFunc(){
    console.log(this.bankAccount);
    this.bankAccountService.updateBankAccount(this.bankAccount).subscribe(data=>{
      this.dialogRef1.open(PopUpComponent, {data: data})
    })
    this.dialogRef.close();
  }
}
