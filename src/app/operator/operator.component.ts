import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../service/operator.service';
import { Operator } from '../model/operator';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {
  operators?: Array<Operator>
  constructor(private operatorService: OperatorService) { }
  ngOnInit(): void {
    this.getOperators()
  }
  getOperators() {

    this.operatorService.getOperators().subscribe(data => {
      this.operators = data
      // console.log(this.operators);
    })
  }
}
