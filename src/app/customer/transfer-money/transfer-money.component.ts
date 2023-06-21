import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BankAccount } from 'src/app/model/bank-account';
import { Customer } from 'src/app/model/customer';
import { User } from 'src/app/model/user';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent {
  
  customer : Customer = new Customer(
    0,
    "",
    "",
    "",
    "",
    0,
    "",
    new User(0, "","","")

  )

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

  partnersdetailFormgroup = new FormGroup({
    customerName: new FormControl(),
    customerPhone: new FormControl(),
    bankName: new FormControl(),

    transferPhone: new FormControl(),
    money: new FormControl(),
  });

  constructor(private customerService: CustomerService, private modalService: NgbModal, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.partnersdetailFormgroup = this.fb.group({
      customerName: new FormControl(),
      customerPhone: new FormControl(),
      bankName: new FormControl(),
      transferPhone: new FormControl(),
      money: new FormControl(),
    })
  }

  partnersdetail(partnersdetailForm: NgForm, editForm: any) {
    this.customerService.partnersdetail(
      partnersdetailForm.value.partnersPhone
    ).subscribe(res => {
      this.bankaccount = res
      this.partnersdetailFormgroup.patchValue({
        customerName: this.bankaccount.customer.customerName,
        customerPhone: new FormControl(),
        bankName: this.bankaccount.bankName
      })
      console.log(partnersdetailForm.value.partnersPhone)
    })
    // this.modalService.open(editForm)
    console.log()
    
  }

  transfermoney():any {
    this.customerService.transfermoney(
      this.partnersdetailFormgroup.value.transferPhone,
      // this.partnersdetailFormgroup.value.customerPhone,
      this.bankaccount.customer.customerPhone,
      this.partnersdetailFormgroup.value.money
    ).subscribe(res => {
      console.log(res)
      this.ngOnInit()
    })
  }
  
}
