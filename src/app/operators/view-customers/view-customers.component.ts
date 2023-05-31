import { Component, OnInit } from '@angular/core';
import { BankAccount } from 'src/app/model/bank-account';
import { OperatorService } from 'src/app/service/operator.service';


@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  customers?: Array<BankAccount>

  constructor(private operatorService: OperatorService) { }

  ngOnInit(): void {
    this.getCustomers()
  }

  getCustomers(): void {
    this.operatorService.getCustomers().subscribe(data => {
      this.customers = data
    })
  }

}
