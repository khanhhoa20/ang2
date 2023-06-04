import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { OperatorComponent } from './operator/operator.component';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './layout/operator/default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OperatorComponent } from './operators/operator/operator.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'operator',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'view-list-operator',
        component: OperatorComponent
      }
    ]
  },
  { path: 'view-list-operator', component: OperatorComponent },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
