import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/model/customer';
import { User } from 'src/app/model/user';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-get-all-account',
  templateUrl: './get-all-account.component.html',
  styleUrls: ['./get-all-account.component.css']
})
export class GetAllAccountComponent implements OnInit{

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
  
  cusdetailFormgroup = new FormGroup({
    customerName: new FormControl(),
    customerPhone: new FormControl(),
    customerDob: new FormControl(),
    customerAddress: new FormControl(),
    customerEmail: new FormControl(),
    userName: new FormControl(),
  });


  constructor(private customerService: CustomerService, private modalService: NgbModal, private fb: FormBuilder) {

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.cusdetailFormgroup = this.fb.group({
      customerName: new FormControl(),
      customerPhone: new FormControl(),
      customerDob: new FormControl(),
      customerAddress: new FormControl(),
      customerEmail: new FormControl(),
      userName: new FormControl(),
    })
  }

  cusdetail(cusdetailForm: NgForm, editForm: any) {
    this.customerService.cusdetail(
      cusdetailForm.value.cusdetailID
    ).subscribe(res => {
      this.customer = res
      this.cusdetailFormgroup.patchValue({
        customerName: this.customer.customerName,
        customerPhone: this.customer.customerPhone,
        customerDob: this.customer.customerDob,
        customerAddress: this.customer.customerAddress,
        customerEmail: this.customer.customerEmail,
        userName: this.customer.user.userName
      })
      console.log(cusdetailForm.value.cusdetailID)
    })
    // this.modalService.open(editForm)
    console.log()
    
  }

  editcus():any {
    this.customerService.editcus(
      this.cusdetailFormgroup.value.customerPhone,
      this.cusdetailFormgroup.value.customerEmail,
      this.cusdetailFormgroup.value.customerAddress,
      this.cusdetailFormgroup.value.userName
    ).subscribe(res => {
      console.log(res)
      this.ngOnInit()
    })
  }

  
}
