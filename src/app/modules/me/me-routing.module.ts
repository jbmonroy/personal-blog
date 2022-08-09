import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { WorksPageComponent } from './pages/works-page/works-page.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutPageComponent
  },
  {
    path:'works',
    component:WorksPageComponent
  },
  {
    path:'**',
    redirectTo:'about'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeRoutingModule { }
