import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../service/operator.service';
import { BankAccount } from '../model/bank-account';

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
