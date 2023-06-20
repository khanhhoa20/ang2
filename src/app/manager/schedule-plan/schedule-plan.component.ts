import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManagerService } from 'src/app/service/manager.service';

import * as dayjs from 'dayjs';

@Component({
  selector: 'app-schedule-plan',
  templateUrl: './schedule-plan.component.html',
  styleUrls: ['./schedule-plan.component.css']
})
export class SchedulePlanComponent implements OnInit {
  schedulePlans: any[] = [];
  apiUrl: string = '';
  addApiUrl: string = '';
  delApiUrl: string = '';
  updateApiUrl: string = '';

  showList: boolean = true;
  showFormAdd: boolean = false;
  showFormUpdate: boolean = false;
  form_name: string = '';

  // selectedStartDate: any;
  selectedStartDate: any;
  selectedEndDate: any;
  pickDate: any;

  name: string = '';
  info: string = '';
  desc: string = '';
  depId: string = '';
  // departments: DepartmentComponent[];
  departments: any[] = [];
  selectedDepartment: any;
  jsonSelectedDep: any;

  selectedSchedule: any;

  constructor(private http: HttpClient, private apiUrlService: ManagerService) {
    this.apiUrl = apiUrlService.getApiUrl();
    this.addApiUrl = apiUrlService.postApiUrl();
    this.delApiUrl = apiUrlService.deleteApiUrl();
    this.updateApiUrl = apiUrlService.putApiUrl();
    this.onDepartmentChange();
  }

  ngOnInit(): void {
    this.getAllSchedulePlans();
    this.getAllDepartments();
  }

  getAllSchedulePlans() {
    this.http.get<any[]>(`${this.apiUrl}/listAllSchedulePlans`).subscribe(data => {
        this.schedulePlans = data.sort((a, b) => a.id - b.id);
        console.log(this.schedulePlans);
      });
  }
  getAllDepartments() {
    this.http.get<any[]>(`${this.apiUrl}/listAllDepartments`).subscribe(data => {
        this.departments = data;
        // console.log(data);
      });
  }

  handleCancel() {
    this.showList = true;
    this.showFormAdd = false;
    this.showFormUpdate = false;
  }

  showFormAddSchedulePlan() {
    this.showList = false;
    this.showFormAdd = true;
    this.showFormUpdate = false;
    this.form_name = 'Form ADD schedule_plan';
  }

  onDepartmentChange(): void {
    const findDep = this.departments.find(d => d.departmentName === this.selectedDepartment);
    if(findDep) {
      const selectedDep = {
        departmentId: findDep.departmentId,
        departmentName: findDep.departmentName
      };
      this.jsonSelectedDep = selectedDep;
    }
  }

  handleAddSchedulePlan() {
    const formattedStartDate = this.pickDate.startDate.format('YYYY-MM-DD');
    const formattedEndDate = this.pickDate.endDate.format('YYYY-MM-DD');

    const newSchedulePlan = {
      scheduleplandetail_info: this.info,
      scheduleplan_description: this.desc,
      scheduleplan_name: this.name,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      department: this.jsonSelectedDep
    }
    // console.log(newSchedulePlan)
    // const jsonNewSchedulePlan = JSON.stringify(newSchedulePlan);
      
    let res = this.http.post(this.addApiUrl, newSchedulePlan, {responseType: 'text' as 'json'})
    res.subscribe((data) => {
      console.log(data);
      // this.showList = true;
      // this.showFormAdd = false;
      location.reload();
    })
  }

  ngModelChange(): void {
    // console.log('Change start date', this.formattedStartDate)
    // console.log('Change end date', this.selectedEndDate)
  }

  // getDepartmentId(scheduleplan: any): number {
  //   const departmentId = scheduleplan.departmentId;

  //   this.http.get<any[]>(`${this.apiUrl}/listAllDepartments`).subscribe(data => {
  //     this.departments = data;
  //   });
  
  //   const department = this.departments.find((dept: any) => dept.departmentId === departmentId);
  
  //   return department ? department.departmentId : 0;
  // }

  handleDeleteSchedulePlan(scheduleId: number) {
    let res = this.http.delete(this.delApiUrl+scheduleId, {responseType: 'text' as 'json'})
    res.subscribe((data) => {
      console.log(data);
      this.getAllSchedulePlans();
    })
  }

  showFormUpdateSchedulePlan(s : any) {
    this.selectedSchedule = s;
    this.showList = false;
    this.showFormAdd = false;
    this.showFormUpdate = true;
    this.form_name = 'Form UPDATE schedule_plan';
  }

  handleUpdateSchedulePlan() {
    // console.log(this.selectedSchedule);
    const formattedStartDate = this.pickDate.startDate.format('YYYY-MM-DD');
    const formattedEndDate = this.pickDate.endDate.format('YYYY-MM-DD');

    const updateSchedulePlan = {
      scheduleplandetail_info: this.info,
      scheduleplan_description: this.desc,
      scheduleplan_name: this.name,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      // createDate: this.selectedSchedule.createDate,
      department: this.jsonSelectedDep
    }
      
    let res = this.http.put(this.updateApiUrl+this.selectedSchedule.id, updateSchedulePlan, {responseType: 'text' as 'json'})
    res.subscribe((data) => {
      console.log(data);
      location.reload();
    })
  }
}
