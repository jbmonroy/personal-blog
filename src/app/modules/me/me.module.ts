import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { WorksComponent } from './pages/works/works.component';


@NgModule({
  declarations: [
    AboutComponent,
    WorksComponent
  ],
  imports: [
    CommonModule,
    MeRoutingModule
  ]
})
export class MeModule { }
