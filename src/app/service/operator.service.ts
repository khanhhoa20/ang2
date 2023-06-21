import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operator } from '../model/operator';
import { BankAccount } from '../model/bank-account';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {
  url = "http://localhost:9090/tpbank"
  allOperators = "userTest/getAll"
  loginUrl = "operator/login"
  unlockBankAccountUrl = "operator/unlock-bank-account"
  viewCustomersUrl = "operator/view-customer-list"
  lockBankAccountUrl = "operator/lock-bank-account"
  depositMoneyUrl = "operator/deposit"
  deleteCustomer = "operator/delete-customer/"
  updateCustomer = "operator/update-customer"
  createBankAccount = "operator/create-bank-account"



  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    return this.http.post(`${this.url}/${this.loginUrl}`, {
      "userName": username,
      "userPass": password
    },
      { responseType: 'text' }
    )
  }

  getOperators(): Observable<Array<Operator>> {
    return this.http.get<Array<Operator>>(`${this.url}/${this.allOperators}`)
  }

  unlockBankAccount(cusPhone: string): Observable<string> {
    return this.http.put(`${this.url}/${this.unlockBankAccountUrl}`, {
      "customerPhone": cusPhone
    }, {
      responseType: 'text'
    })
  }

  getCustomers(): Observable<Array<BankAccount>> {
    return this.http.get<Array<BankAccount>>(`${this.url}/${this.viewCustomersUrl}`)
  }

  lockBankAccount(cusPhone: string): Observable<string> {
    return this.http.post(`${this.url}/${this.lockBankAccountUrl}`, {
      "customerPhone": cusPhone
    }, {
      responseType: 'text'
    })
  }
  deletedCustomer1():string{
    return this.deleteCustomer;
  }

  depositMoney(amount: number, cusPhone: string): Observable<string> {
    return this.http.put(`${this.url}/${this.depositMoneyUrl}`, {
      "transactionAmount": amount,
      "bankAccount": {
        "customer": {
          "customerPhone": cusPhone
        }
      }
    }, {
      responseType: 'text'
    })
  }
  createBankAccount1(balance:string,customerName:string,customerAddress:string,customerPhone:string,customerEmail:string,customerNationalId:number,userName:string,userPass:string,dob:string):Observable<string>{
    return this.http.post(`${this.url}/${this.createBankAccount}`,{
      "balance": balance,
      "customer":{
      "customerDob":dob,
      "customerName":customerName,
      "customerAddress":customerAddress,
      "customerPhone":customerPhone,
      "customerEmail":customerEmail,
      "customerNationalId":customerNationalId,
      "user":{
        "userName":userName,
        "userPass":userPass
      }
      }
      

    },{responseType: 'text'}
    )
  }
  updateCustomer1(customerName:string,customerAddress:string,cusPhone:string,userPass:string): Observable<string>{
    return this.http.put(`${this.url}/${this.updateCustomer}`,{
      "customerName":customerName,
      "customerAddress":customerAddress,
      "customerPhone":cusPhone,
      "user":{
        "userPass":userPass
      }
      
    },{
      responseType: 'text'
    });
  }

}
