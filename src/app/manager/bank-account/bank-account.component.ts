import { Component, OnInit } from '@angular/core';
import { BankAccount } from 'src/app/model/bank-account';
import { MatDialog } from '@angular/material/dialog';
import { Customer } from 'src/app/model/customer';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { User } from 'src/app/model/user';
import { ManagerService } from 'src/app/service/manager.service';

interface Bank {
  value: string;
  bankName: string;
}

interface Status {
  value: string;
  lockStatus: string;
}

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {
  balance: number = 0;
  bankName: string = '';
  lockStatus: string = '';

  customerName: string = '';
  customerAddress: string = '';
  customerPhone: string = '';
  customerEmail: string = '';
  customerNationalId: number = 0;
  customerDob: string = '';

  userName: string = '';
  userPass: string = '';
  role: string = '';

  animal: string = '';
  name: string = '';

  bankAccount: BankAccount | undefined;

  banks: Bank[] = [
    { value: 'TPBank', bankName: 'TPBank' },
    { value: 'AriBankncc', bankName: 'AriBankncc' },
    { value: 'VietcomBank', bankName: 'VietcomBank' },
  ];

  status: Status[] = [
    { value: 'Lock', lockStatus: 'Lock' },
    { value: 'Active', lockStatus: 'Active' },
  ];

  constructor(private bankAccountService: ManagerService) {}

  ngOnInit(): void {}
  saveBankAccount() {
    const user = new User(null, this.userName, this.userPass, this.role);
    const customer = new Customer(
      null,
      this.customerName,
      this.customerAddress,
      this.customerPhone,
      this.customerEmail,
      this.customerNationalId,
      this.customerDob,
      user
    );
    
    this.bankAccount = new BankAccount(
      null,
      this.balance,
      this.bankName,
      this.lockStatus,
      customer,
      []
    );
    console.log(this.bankAccount)
    this.bankAccountService.createBankAccount(this.bankAccount).subscribe(
      data => {
        alert(data);
      },
      error => {
        console.log(error);
        console.log(this.userName)
        alert('Cannot create Account');
      }
    );
  }

}
