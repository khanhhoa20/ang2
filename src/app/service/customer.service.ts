import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService{

  constructor(private http: HttpClient) { }
  url = "http://localhost:9090/tpbank"
  loginUrl = "customer/login"
  cusDetailUrl = "customer/cusdetail"

  login(username: string, password: string): Observable<string> {
    return this.http.post(`${this.url}/${this.loginUrl}`, {
      "userName": username,
      "userPass": password
    },
      { responseType: 'text' }
    )
  }


  
}
