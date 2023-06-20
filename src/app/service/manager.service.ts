import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Operator } from '../model/operator';
import { BankAccount } from '../model/bank-account';
import { Manager } from '../model/manager';
import { User } from '../model/user';
import { Department } from '../model/department';

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


  updateBankAccountUrl = "manager/updateBankAccount"
  createbankBankAccountUrl = "manager/createBankAccount"
  findBankAccountByIdUrl = "manager/findAccountById/"
  deleteBankAccountUrl = "manager/deleteBankAccount/"
  getAllBankAccountUrl = "manager/getAllBankAccount"


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


  // function create bank account for customer ThanhPhuc
  createBankAccount(bankAccount: BankAccount): Observable<string> {
    return this.http.post(`${this.url}/${this.createbankBankAccountUrl}`, bankAccount, { responseType: 'arraybuffer' })
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

  //Get all bank acount to show Thanhphuc
  getAllBankAccount(): Observable<BankAccount[]> {
    return this.http.get<BankAccount[]>(`${this.url}/${this.getAllBankAccountUrl}`);
  }

  //Delete bank account ThanhPhuc
  deleteBankAccount(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${this.deleteBankAccountUrl}${id}`, { responseType: 'arraybuffer' }).pipe(
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

  //Find bank account by id
  findBankAccountById(id: number): Observable<any> {
    const url = `${this.url}/${this.findBankAccountByIdUrl}${id}`;
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
    let res = this.http.put(`${this.url}/${this.updateBankAccountUrl}`, bankAccount, {
      responseType: 'text'
    })
    res.subscribe(data => {});
    return res
  }

  //-manager--
  getManagerList() : Observable<Manager[]>{
    return this.http.get<Manager[]>(`${this.scheduleApiUrl}`);
  }

  getUserHaveNotBeenChosen(): Observable<User[]>{
    return this.http.get<User[]>(`${this.scheduleApiUrl}`+"/user-have-not-been-chosen");
  }

  getDepartmentHaveNotBeenChosen(): Observable<Department[]>{
    return this.http.get<Department[]>(`${this.scheduleApiUrl}`+"/department-have-not-been-chosen");
  }

  getUserByUsername(username : string) : Observable<User>{
    return this.http.get<User>(`${this.scheduleApiUrl}`+"/showUser/"+`${username}` );
  }

  getDepartmentById(id: number) :Observable<Department>{
    return this.http.get<Department>(`${this.scheduleApiUrl}`+"/showDepartment/"+`${id}` );
  }

  addManager(manager : Manager) : Observable<Manager>{
    return this.http.post<Manager>(`${this.scheduleApiUrl}`+"/add-manager", manager );
  }

  getManagerById(id: number) :Observable<Manager>{
    return this.http.get<Manager>(`${this.scheduleApiUrl}/${id}` );
  }

  updateManager(id: number, manager: Manager): Observable<Object>{
    return this.http.put(`${this.scheduleApiUrl}`+"/update-manager/"+`${id}`, manager );
  }

  deleteManager(id ?: number): Observable<Object>{
    return this.http.delete(`${this.scheduleApiUrl}`+"/delete-manager/"+`${id}`);
  }
}
