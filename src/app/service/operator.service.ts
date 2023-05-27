import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operator } from '../model/operator';
import { BankAccount } from '../model/bank-account';

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

}
