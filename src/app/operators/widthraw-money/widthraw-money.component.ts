import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OperatorService } from 'src/app/service/operator.service';

@Component({
  selector: 'app-widthraw-money',
  templateUrl: './widthraw-money.component.html',
  styleUrls: ['./widthraw-money.component.css']
})
export class WidthrawMoneyComponent {
  message?: string
  constructor(private operService: OperatorService) {

  }
  ngOnInit(): void {
    this.submit
  }

  submit(myForm: NgForm) {
    this.operService.widthrawMoney(myForm.value.money, myForm.value.phone).subscribe(data => {
      this.message = data
    })
  }

}
