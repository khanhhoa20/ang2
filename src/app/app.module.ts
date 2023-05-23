import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { OperatorService } from './service/operator.service';
import { OperatorComponent } from './operator/operator.component';
import { LoginComponent } from './login/login.component';
import { UnlockBankAccountComponent } from './unlock-bank-account/unlock-bank-account.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorComponent,
    LoginComponent,
    UnlockBankAccountComponent,
    ViewCustomersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [OperatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
