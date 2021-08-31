import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateEmpComponent } from './add-update-emp/add-update-emp.component';
import { DashboardComponent } from './dashboard.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
     path: '',
     component: DashboardComponent,
     children: [
       {
         path: '',
         component: HomeComponent
       },
       {
         path: 'add-update',
         component: AddUpdateEmpComponent 
       },
       {
         path: 'emp-details',
         component: EmpDetailsComponent
       }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
