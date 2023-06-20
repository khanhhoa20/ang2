import { Component, Inject, OnInit } from '@angular/core';
import { Operator } from 'src/app/model/operator';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { ManagerService } from 'src/app/service/manager.service';
@Component({
  selector: 'app-add-operator',
  templateUrl: './add-operator.component.html',
  styleUrls: ['./add-operator.component.css']
})
export class AddOperatorComponent implements OnInit {
  msg?: any

  operForm: FormGroup

  operPhone: string = '';
  operAddress: string = '';
  email: string = '';
  operName: string = '';
  username: string = '';
  password: string = '';
  operatorStatus: string = '';
  departmentId: number = 0
  departmentName: string = '';
  status: string = '';
  statusForm: Array<string> = ['active', 'inactive']

  constructor(
    private managerService: ManagerService,
    private fb: FormBuilder,
    // private dialogRef: MatDialogRef<AddOperatorComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.operForm = this.fb.group({
      operPhone: '',
      operAddress: '',
      email: '',
      operName: '',
      username: '',
      password: '',
      operatorStatus: '',
      departmentId: '',
      status: '',
    });
  }

  ngOnInit(): void {

  }

  addOperator(operatorForm: any): any {
    this.managerService.saveOperator(
      operatorForm.value.phone,
      operatorForm.value.address,
      operatorForm.value.email,
      operatorForm.value.fullname,
      operatorForm.value.status,
      operatorForm.value.username,
      operatorForm.value.password,
      operatorForm.value.departmentId
    ).subscribe(res => {
        console.log(res)
        return res
      })
  }
}
