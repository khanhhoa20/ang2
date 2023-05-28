import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { OperatorService } from './service/operator.service';
import { OperatorComponent } from './operator/operator.component';
import { LoginComponent } from './login/login.component';
import { UnlockBankAccountComponent } from './unlock-bank-account/unlock-bank-account.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { AppRoutingModule } from './app-routing.module';
import { LockBankAccountComponent } from './lock-bank-account/lock-bank-account.component';
import { DepositMoneyComponent } from './deposit-money/deposit-money.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OperatorComponent,
    LoginComponent,
    UnlockBankAccountComponent,
    ViewCustomersComponent,
    LockBankAccountComponent,
    DepositMoneyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [OperatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
