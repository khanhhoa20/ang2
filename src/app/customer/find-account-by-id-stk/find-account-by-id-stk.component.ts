import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BankAccount } from 'src/app/model/bank-account';
import { Customer } from 'src/app/model/customer';
import { User } from 'src/app/model/user';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-find-account-by-id-stk',
  templateUrl: './find-account-by-id-stk.component.html',
  styleUrls: ['./find-account-by-id-stk.component.css']
})
export class FindAccountByIdStkComponent implements OnInit{
  
  bankaccount: BankAccount = new BankAccount(
    0,
    0,
    "",
    "",
    new Customer(0,
      "",
      "",
      "",
      "",
      0,
      "",
      new User(0, "","","")),
    []
  )
  
  accdetailFormgroup = new FormGroup({
    bankName: new FormControl(),
    balance: new FormControl(),
    customerName: new FormControl(),
  });

  constructor(private customerService: CustomerService, private modalService: NgbModal, private fb: FormBuilder) {

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.accdetailFormgroup = this.fb.group({
      bankName: new FormControl(),
      balance: new FormControl(),
      customerName: this.bankaccount.customer.customerName,
      
    })
  }

  
  accdetail(accdetailForm: NgForm) {
    this.customerService.accdetail(
      accdetailForm.value.accdetailID
    ).subscribe(res => {
      this.bankaccount = res
      this.accdetailFormgroup.patchValue({
        bankName: this.bankaccount.bankName,
        balance: this.bankaccount.balance,
        customerName: this.bankaccount.customer.customerName,
      })
      console.log(accdetailForm.value.accdetailID)
    })
    console.log()
    
  }

  
}


