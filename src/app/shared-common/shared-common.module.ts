import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNG Components Imports here
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardModule,
    ButtonModule,
    HeaderComponent
  ]
})
export class SharedCommonModule { }
