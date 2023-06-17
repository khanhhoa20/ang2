import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  url = "http://localhost:9090/tpbank"
  viewAllOperatorUrl = "manager/listAllOperator"
  loginUrl = "manager/login"

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
}
