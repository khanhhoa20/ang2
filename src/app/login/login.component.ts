import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../service/operator.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerService } from '../service/manager.service';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  result?: string;
  constructor(
    private operService: OperatorService,
    private cusService: CustomerService,
    private managerService: ManagerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.submit;
  }

  submit(myForm: NgForm) {
    this.username = myForm.value.username;
    this.password = myForm.value.password;
    this.operService.login(this.username, this.password).subscribe((data) => {
      this.result = data;
      if (data.includes('operator')) {
        this.router?.navigateByUrl('operator/view-list-customer');
      }
      if (data.includes('manager')) {
        this.router?.navigateByUrl('manager/view-list-operator');
      }
      if (data.includes('customer')) {
        this.router?.navigateByUrl('customer/cusdetail');
      }
    });
  }
}
