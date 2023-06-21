import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { BankAccount } from '../model/bank-account';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class CustomerService{

  constructor(private http: HttpClient) { }
  url = "http://localhost:9090/tpbank"
  loginUrl = "customer/login"
  cusDetailUrl = "customer/cusdetail"
  accDetailUrl = "customer/accdetail"
  passDetailUrl = "customer/passdetail"
  partnersDetailUrl = "customer/partnersdetail"

  updatecusUrl = "customer/cusupdate"
  updatepassUrl = "customer/passupdate"

  transfermoneyUrl = "customer/transfermoney"

  login(username: string, password: string): Observable<string> {
    return this.http.post(`${this.url}/${this.loginUrl}`, {
      "userName": username,
      "userPass": password
    },
      { responseType: 'text' }
    )
  }

  cusdetail(customerId: number): Observable<Customer> {
    return this.http.put<Customer>(`${this.url}/${this.cusDetailUrl}`, {
      "customerId": customerId
    }
    )
  }
  accdetail(customerId: number): Observable<BankAccount> {
    return this.http.put<BankAccount>(`${this.url}/${this.accDetailUrl}`, {
      "customerId": customerId
    }
    )
  }
  passdetail(userID: number): Observable<User> {
    return this.http.put<User>(`${this.url}/${this.passDetailUrl}`, {
      "userID": userID
    }
    )
  }
  
  editcus(customerPhone: string, customerEmail: string, customerAddress: string, userName: string): Observable<string> {
    return this.http.put(`${this.url}/${this.updatecusUrl}`, {
      "customerPhone": customerPhone,
      "customerEmail": customerEmail,
      "customerAddress": customerAddress,
      "user":{
          "userName": userName
      }
    },
    {
      responseType: "text"
    }
    )
  }

  
  editpass(userName: string, userPass: string): Observable<string> {
    return this.http.put(`${this.url}/${this.updatepassUrl}`, {
      "userName": userName,
      "userPass": userPass,
    },
    {
      responseType: "text"
    }
    )
  }

  
  partnersdetail(customerPhone: string): Observable<BankAccount> {
    return this.http.put<BankAccount>(`${this.url}/${this.partnersDetailUrl}`, {
      "customerPhone": customerPhone
    }
    )
  }

  transfermoney(transferPhone: string, receiverPhone: string, money: number):Observable<string> {
    return this.http.put(`${this.url}/${this.transfermoneyUrl}`, {
      "transferPhone": transferPhone,
      "receiverPhone": receiverPhone,
      "money": money
    },
    {
      responseType: "text"
    }
    )
  }


  

  
}
