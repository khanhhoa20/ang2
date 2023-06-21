import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-change-account-password',
  templateUrl: './change-account-password.component.html',
  styleUrls: ['./change-account-password.component.css']
})
export class ChangeAccountPasswordComponent {
  user : User =  new User(
    0,
    "",
    "",
    ""
  )

  passdetailFormgroup = new FormGroup({
    userID: new FormControl(),
    userName: new FormControl(),
    userPass: new FormControl(),
    role: new FormControl(),
  });

  constructor(private customerService: CustomerService, private modalService: NgbModal, private fb: FormBuilder) {
    
  }
  ngOnInit(): void {
    this.passdetailFormgroup = this.fb.group({
      userID: new FormControl(),
      userName: new FormControl(),
      userPass: new FormControl(),
      role: new FormControl(),
    })
  }

  passdetail(passdetailForm: NgForm, editForm: any) {
    this.customerService.passdetail(
      passdetailForm.value.userID
    ).subscribe(res => {
      this.user = res
      this.passdetailFormgroup.patchValue({
        userID: this.user.userID,
        userName: this.user.userName,
        // userPass: this.user.userPass,
        role: this.user.role
      })
      console.log(passdetailForm.value.changepassID)
    })
    console.log()
  }

  editpass():any {
    this.customerService.editpass(
      this.passdetailFormgroup.value.userName,
      this.passdetailFormgroup.value.userPass
    ).subscribe(res => {
      console.log(res)
      this.ngOnInit()
    })
  }

}
