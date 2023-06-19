import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Operator } from '../model/operator';
import { BankAccount } from '../model/bank-account';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  url = "http://localhost:9090/tpbank/"
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


  // bankingAccount
  createBankAccount(bankAccount: BankAccount): Observable<string> {
    return this.http.post(`${this.url}manager/createBankAccount`, bankAccount, { responseType: 'arraybuffer' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle the error here
          console.error('An error occurred:', error.error);
          // You can throw a custom error message or return a default value
          return throwError('Error creating bank account.');
        }),
        map((response: ArrayBuffer) => {
          const decoder = new TextDecoder('utf-8');
          const decodedResponse = decoder.decode(response);
          return decodedResponse;
        })
      );
  }

  getAllBankAccount(): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>(`${this.url}manager/getAllBankAccount`);
  }

  deleteBankAccount(id: number): Observable<any> {
    return this.http.delete(`${this.url}manager/deleteBankAccount/${id}`, { responseType: 'arraybuffer' }).pipe(
      catchError((error: any) => {
        // Handle the error here
        console.error('An error occurred:', error);
        // You can throw a custom error message or return a default value
        return throwError('Error deleting bank account.');
      }),
      map((response: ArrayBuffer) => {
        const decoder = new TextDecoder('utf-8');
        const decodedResponse = decoder.decode(response);
        return decodedResponse;
      })
    );
  }

  findBankAccountById(id: number): Observable<any> {
    const url = `${this.url}manager/findAccountById/${id}`;
    return this.http.get<BankAccount>(url)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle the error here
          console.error('An error occurred:', error.error);
          // You can throw a custom error message or return a default value
          return throwError('Unable to fetch bank account.');
        })
      );
  }
  
  updateBankAccount(bankAccount: BankAccount): Observable<string> {
    console.log("Before updateBankAccount API call");
    console.log(bankAccount)
    let res = this.http.put(`${this.url}manager/updateBankAccount`, bankAccount, {
      responseType: 'text'
    })
    res.subscribe(data => {});
    return res

  }
}
