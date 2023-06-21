import { Component, OnInit } from '@angular/core';
import { BankAccount } from 'src/app/model/bank-account';
import { OperatorService } from 'src/app/service/operator.service';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/model/customer';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, NgForm, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
  [x: string]: any;
  closeResult:string=''
  customers?: Array<BankAccount>
  apiDeleteCustomer:string = ''
  url = "http://localhost:9090/tpbank/"
  message?:string
  editCustomerForm = new FormGroup({
    customerName: new FormControl(),
    customerPhone: new FormControl(),
    customerAddress: new FormControl(),
    password: new FormControl()
  });
  

  constructor(private operatorService: OperatorService,private http: HttpClient, private modalService:NgbModal,private fb: FormBuilder) { 
    // this.apiDeleteCustomer = this.operatorService.deletedCustomer1()
  }

  ngOnInit(): void {
    this.getCustomers()
    // this.deleteCustomer1()
    this.apiDeleteCustomer = this.operatorService.deletedCustomer1()
  }

  getCustomers(): void {
    this.operatorService.getCustomers().subscribe(data => {
      this.customers = data
    })
  }
  deleteCustomer1(cusId:number|null){
    let respone = this.http.delete(this.url+this.apiDeleteCustomer+cusId,{responseType : 'text' as 'json'})
    respone.subscribe((data)=>{
      console.log(data);
      this.getCustomers()
      
    })
  }
  updateCustomer():any{
    this.operatorService.updateCustomer1(this.editCustomerForm.value.customerName,this.editCustomerForm.value.customerAddress,this.editCustomerForm.value.customerPhone,this.editCustomerForm.value.password).subscribe((data)=>{
      this.message = data
      this.getCustomers()
    })
    this.modalService.dismissAll()
    
  }
  open(content:any,cus:Customer) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.editCustomerForm.patchValue({
      customerName: cus.customerName,
    customerPhone: cus.customerPhone,
    customerAddress: cus.customerAddress,
    password: cus.user.userPass
    })
  }
  openAdd(form:any,cus:Customer){
    this.modalService.open(form, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  // open(content:any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

}
