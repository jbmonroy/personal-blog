import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitRoutingModule } from './init-routing.module';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    InitPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    InitRoutingModule,
    SharedModule
  ]
})
export class InitModule { }
