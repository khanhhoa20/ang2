import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { OperatorComponent } from './operator/operator.component';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './layout/operator/default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OperatorComponent } from './operators/operator/operator.component';
import { ViewCustomersComponent } from './operators/view-customers/view-customers.component';
import { CreateBankAccountComponent } from './operators/create-bank-account/create-bank-account.component';
import { LockBankAccountComponent } from './operators/lock-bank-account/lock-bank-account.component';
import { UnlockBankAccountComponent } from './operators/unlock-bank-account/unlock-bank-account.component';
import { DepositMoneyComponent } from './operators/deposit-money/deposit-money.component';
import { WidthrawMoneyComponent } from './operators/widthraw-money/widthraw-money.component';
import { CustomerDefaultComponent } from './layout/customer/customer-default/customer-default.component';
import { GetAllAccountComponent } from './customer/get-all-account/get-all-account.component';
import { FindAccountByIdStkComponent } from './customer/find-account-by-id-stk/find-account-by-id-stk.component';
import { ChangeAccountPasswordComponent } from './customer/change-account-password/change-account-password.component';
// import { UpdateAccountInformationComponent } from './customer/update-account-information/update-account-information.component';
import { TransferMoneyComponent } from './customer/transfer-money/transfer-money.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'operator',
    component: DefaultComponent,
    children: [
      {
        path: 'view-list-customer',
        component: ViewCustomersComponent
      },
      {
        path: 'create-bank-account',
        component: CreateBankAccountComponent
      },
      {
        path: 'lock-bank-account',
        component: LockBankAccountComponent
      },
      {
        path: 'unlock-bank-account',
        component: UnlockBankAccountComponent
      },
      {
        path: 'deposit-money',
        component: DepositMoneyComponent
      },
      {
        path: 'widthraw-money',
        component: WidthrawMoneyComponent
      },
    ]
  },
  {
    path: 'customer',
    component: CustomerDefaultComponent,
    children: [
      {
        path: 'cusdetail',
        component: GetAllAccountComponent
      },
      {
        path: 'accdetail',
        component: FindAccountByIdStkComponent
      },
      {
        path: 'changepass',
        component: ChangeAccountPasswordComponent
      },
      {
        path: 'transfermoney',
        component: TransferMoneyComponent
      },
      
    ]
  }
  // { path: 'view-list-operator', component: OperatorComponent },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
