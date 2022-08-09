import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitRoutingModule } from './init-routing.module';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    InitPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    InitRoutingModule
  ]
})
export class InitModule { }
