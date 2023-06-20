import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { BankAccount } from '../model/bank-account';

@Injectable({
  providedIn: 'root'
})
export class CustomerService{

  constructor(private http: HttpClient) { }
  url = "http://localhost:9090/tpbank"
  loginUrl = "customer/login"
  cusDetailUrl = "customer/cusdetail"
  accDetailUrl = "customer/accdetail"
  updatecusUrl = "customer/cusupdate"

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





}
