import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OperatorService } from 'src/app/service/operator.service';

@Component({
  selector: 'app-deposit-money',
  templateUrl: './deposit-money.component.html',
  styleUrls: ['./deposit-money.component.css']
})
export class DepositMoneyComponent implements OnInit {
  message?: string
  constructor(private operService: OperatorService) {

  }
  ngOnInit(): void {
    this.submit
  }

  submit(myForm: NgForm) {
    this.operService.depositMoney(myForm.value.money, myForm.value.phone).subscribe(data => {
      this.message = data
    })
  }

}
