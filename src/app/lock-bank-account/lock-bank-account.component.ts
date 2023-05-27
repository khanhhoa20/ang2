import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../service/operator.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lock-bank-account',
  templateUrl: './lock-bank-account.component.html',
  styleUrls: ['./lock-bank-account.component.css']
})
export class LockBankAccountComponent implements OnInit {
  messageResult?: string
  constructor(private operService: OperatorService) { }

  ngOnInit(): void {
    this.submit
  }

  submit(myForm: NgForm) {
    this.operService.lockBankAccount(myForm.value.cusPhone).subscribe(data => {
      this.messageResult = data
    })
  }

}
