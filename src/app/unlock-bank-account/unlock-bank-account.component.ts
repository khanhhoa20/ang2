import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OperatorService } from '../service/operator.service';

@Component({
  selector: 'app-unlock-bank-account',
  templateUrl: './unlock-bank-account.component.html',
  styleUrls: ['./unlock-bank-account.component.css']
})
export class UnlockBankAccountComponent implements OnInit {
  messageResult?: string

  constructor(private operatorService: OperatorService) { }

  ngOnInit(): void {
    this.submit
  }

  submit(myForm: NgForm) {
    this.operatorService.unlockBankAccount(myForm.value.cusPhone).subscribe(data => {
      this.messageResult = data
    })
  }

}
