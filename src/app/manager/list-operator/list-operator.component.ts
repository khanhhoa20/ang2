import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Operator } from 'src/app/model/operator';
import { AddOperatorComponent } from '../add-operator/add-operator.component';
import { FormControl, FormGroup, NgForm, FormBuilder } from '@angular/forms';
import { ManagerService } from 'src/app/service/manager.service';

@Component({
  selector: 'app-list-operator',
  templateUrl: './list-operator.component.html',
  styleUrls: ['./list-operator.component.css'],
  providers: [AddOperatorComponent],

})
export class ListOperatorComponent implements OnInit {
  msg?: string
  operator?: Array<Operator>
  status: Array<string> = ['active', 'inactive']
  closeResult: string = ''
  deleteUsername: string = ''
  editOperatorForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    address: new FormControl(),
    departmentId: new FormControl(),
    status: new FormControl()
  });

  constructor(
    private managerService: ManagerService,
    private modalService: NgbModal,
    private addComp: AddOperatorComponent,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getListOperator()
    this.editOperatorForm = this.fb.group({
      username: [''],
      password: [''],
      name: [''],
      email: [''],
      phoneNumber: [''],
      address: [''],
      departmentId: [''],
      status: ['']
    })
  }

  getListOperator() {
    this.managerService.getAllOperator().subscribe(operator => {
      this.operator = operator
    })
  }

  openForm(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addOperator(operatorForm: NgForm) {
    this.msg = ""
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
      this.msg = res
      this.ngOnInit();
      if (this.msg.includes("successfully")) {
        this.modalService.dismissAll();
      }
      return res
    })
    

  }

  openEdit(editForm: any, operator: Operator) {
    this.modalService.open(editForm, {
      backdrop: 'static',
      size: 'lg'
    });
    this.editOperatorForm.patchValue({
      username: operator.user.userName,
      password: operator.user.userPass,
      name: operator.operName,
      email: operator.email,
      phoneNumber: operator.operPhone,
      address: operator.operAddress,
      departmentId: operator.department.departmentId,
      status: operator.operatorStatus

    })
  }

  editSubmit(): any {
    this.managerService.editOperator(this.editOperatorForm.value.phoneNumber, this.editOperatorForm.value.address, this.editOperatorForm.value.email, this.editOperatorForm.value.name, this.editOperatorForm.value.status, this.editOperatorForm.value.username, this.editOperatorForm.value.password, this.editOperatorForm.value.departmentId).subscribe(res => {
      this.ngOnInit();
      this.modalService.dismissAll();
      console.log(res)
      return res
    })
  }

  openDelete(deleteConfirm: any, operator: Operator) {
    this.deleteUsername = operator.user.userName
    this.modalService.open(deleteConfirm, {
      backdrop: 'static',
      size: 'lg'
    })
  }

  onDelete() {
    this.managerService.deleteOperator(this.deleteUsername).subscribe(res => {
      this.ngOnInit();
      this.modalService.dismissAll();
    })
  }
}
