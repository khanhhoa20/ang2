import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operator } from '../model/operator';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  url = "http://localhost:9090/tpbank"
  viewAllOperatorUrl = "manager/listAllOperator"
  loginUrl = "manager/login"
  listOperatorUrl = "manager/listAllOperator"
  createOperatorUrl = "manager/create-operator"
  editOperatorUrl = "manager/edit-operator"
  deleteUrl = "manager/delete-operator"

  private scheduleApiUrl: string = 'http://localhost:9090/tpbank/manager';
  private addScheduleApiUrl: string = 'http://localhost:9090/tpbank/manager/addSchedulePlan';
  private delScheduleApiUrl: string = 'http://localhost:9090/tpbank/manager/deleteSchedulePlan/';
  private updateScheduleApiUrl: string = 'http://localhost:9090/tpbank/manager/updateSchedulePlan/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    return this.http.post(`${this.url}/${this.loginUrl}`, {
      "userName": username,
      "userPass": password
    },
      { responseType: 'text' }
    )
  }

  //--schedule-plan
  getApiUrl(): string {
    return this.scheduleApiUrl;
  }

  postApiUrl(): string {
    return this.addScheduleApiUrl;
  }

  deleteApiUrl(): string {
    return this.delScheduleApiUrl;
  }

  putApiUrl(): string {
    return this.updateScheduleApiUrl;
  }
  //--

  getAllOperator(): Observable<Array<Operator>> {
    return this.http.get<Array<Operator>>(`${this.url}/${this.listOperatorUrl}`)
  }

  saveOperator(operPhone: string, operAddress: string, email: string, operName: string, operatorStatus: string, userName: string, userPass: string, departmentId: number): Observable<string> {
    return this.http.post(`${this.url}/${this.createOperatorUrl}`, {
      "operPhone": operPhone,
      "operAddress": operAddress,
      "email": email,
      "operName": operName,
      "operatorStatus": operatorStatus,
      "user": {
        "userName": userName,
        "userPass": userPass
      },
      "department": {
        "departmentId": departmentId
      }
    }, { responseType: 'text' })
  }

  editOperator(operPhone: string, operAddress: string, email: string, operName: string, operatorStatus: string, userName: string, userPass: string, departmentId: number): Observable<string> {
    return this.http.post(`${this.url}/${this.editOperatorUrl}`, {
      "operPhone": operPhone,
      "operAddress": operAddress,
      "email": email,
      "operName": operName,
      "operatorStatus": operatorStatus,
      "user": {
        "userName": userName,
        "userPass": userPass
      },
      "department": {
        "departmentId": departmentId
      }
    }, { responseType: 'text' })
  }

  deleteOperator(username: string): Observable<string> {
    return this.http.delete(`${this.url}/${this.deleteUrl}/${username}`, { responseType: 'text' })
  }
}
