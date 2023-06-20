import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { OperatorService } from 'src/app/service/operator.service';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.css']
})
export class CreateBankAccountComponent implements OnInit {
  message?:string

  constructor(private operatorService:OperatorService){}
  
  ngOnInit(): void {
    this.submit
  }
  submit(myForm:NgForm){
    this.operatorService.createBankAccount1(myForm.value.balance,myForm.value.bankname,myForm.value.name,myForm.value.address,myForm.value.phone,myForm.value.email,myForm.value.nationalId,myForm.value.username,myForm.value.password).subscribe(data =>{
      this.message = data
    })

  }

}
