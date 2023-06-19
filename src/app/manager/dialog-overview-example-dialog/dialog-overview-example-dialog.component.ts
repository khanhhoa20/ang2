import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BankAccount } from 'src/app/model/bank-account';
import { ManagerService } from 'src/app/service/manager.service';
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
    let res = this.bankAccountService.updateBankAccount(this.bankAccount)
    // console.log(this.bankAccountService.updateBankAccount(this.bankAccount)) ;
    console.log(res)
    this.dialogRef.close();
  }
}
