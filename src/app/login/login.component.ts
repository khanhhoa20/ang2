import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../service/operator.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = ''
  password: string = ''
  result?: any

  constructor(private operService: OperatorService) {

  }

  ngOnInit(): void {
    this.submit
  }

  submit(myForm: NgForm) {
    this.username = myForm.value.username
    this.password = myForm.value.password
    this.operService.login(this.username, this.password).subscribe(data => {
      this.result = data
    })
  }


}
