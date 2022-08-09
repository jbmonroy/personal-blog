import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { WorksPageComponent } from './pages/works-page/works-page.component';


@NgModule({
  declarations: [
    AboutPageComponent,
    WorksPageComponent
  ],
  imports: [
    CommonModule,
    MeRoutingModule
  ]
})
export class MeModule { }
