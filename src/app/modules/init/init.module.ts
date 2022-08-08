import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitRoutingModule } from './init-routing.module';
import { InitPageComponent } from './pages/init-page/init-page.component';


@NgModule({
  declarations: [
    InitPageComponent
  ],
  imports: [
    CommonModule,
    InitRoutingModule
  ]
})
export class InitModule { }
