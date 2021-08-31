import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddUpdateEmpComponent } from './add-update-emp/add-update-emp.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { SharedCommonModule } from '../shared-common/shared-common.module';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    AddUpdateEmpComponent,
    EmpDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedCommonModule
  ]
})
export class DashboardModule { }
