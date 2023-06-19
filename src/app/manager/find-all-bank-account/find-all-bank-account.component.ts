import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BankAccount } from 'src/app/model/bank-account';
import { ManagerService } from 'src/app/service/manager.service';
@Component({
  selector: 'app-find-all-bank-account',
  templateUrl: './find-all-bank-account.component.html',
  styleUrls: ['./find-all-bank-account.component.css']
})
export class FindAllBankAccountComponent implements OnInit {
  bankAccount: BankAccount[] | undefined;
  displayedColumns: string[] = ['position', 'name', 'weight', 'bankName', 'customerAddress', 'customerEmail', 'customerPhone','customerDob', 'customerName','delete', 'edit'];
  ngOnInit(): void {
    // this.getBankAccount();
  }
  constructor(private bankAccountService: ManagerService, public dialog: MatDialog){}
  getBankAccount(){
    this.bankAccountService.getAllBankAccount().subscribe(data => {
      this.bankAccount = data;
    });
  }

  deleteFunc(id :number){
    const confirmation = confirm(`Do you want to delete the account with ID = ${id}?`);

    if (confirmation) {
        this.bankAccountService.deleteBankAccount(id).subscribe(data => {
            console.log(data);
            alert("Deleted");
            this.getBankAccount();
        });
    }
    
  }

  editFunc(id: number){
    
  }

  openDialog(element: BankAccount): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      height: '400px',
      width: '600px',
      data: element
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
