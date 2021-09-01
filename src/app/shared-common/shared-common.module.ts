import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNG Components Imports here
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    HeaderComponent
  ]
})
export class SharedCommonModule { }
