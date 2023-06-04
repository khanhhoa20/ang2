import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { FlexLayoutModule } from '@angular/flex-layout'

import { AppComponent } from './app.component';
import { OperatorService } from './service/operator.service';
import { OperatorComponent } from './operators/operator/operator.component';
import { LoginComponent } from './login/login.component';
import { UnlockBankAccountComponent } from './operators/unlock-bank-account/unlock-bank-account.component';
import { ViewCustomersComponent } from './operators/view-customers/view-customers.component';
import { AppRoutingModule } from './app-routing.module';
import { LockBankAccountComponent } from './operators/lock-bank-account/lock-bank-account.component';
import { DepositMoneyComponent } from './operators/deposit-money/deposit-money.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './layout/operator/default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/operator/sidebar/sidebar.component';
import { CreateBankAccountComponent } from './operators/create-bank-account/create-bank-account.component';
import { WidthrawMoneyComponent } from './operators/widthraw-money/widthraw-money.component';



@NgModule({
  declarations: [
    AppComponent,
    OperatorComponent,
    LoginComponent,
    UnlockBankAccountComponent,
    ViewCustomersComponent,
    LockBankAccountComponent,
    DepositMoneyComponent,
    DefaultComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CreateBankAccountComponent,
    WidthrawMoneyComponent
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
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule
  ],
  providers: [OperatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
