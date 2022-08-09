import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'home',
    component: HomePageComponent
  },
  {
    path:'blog',
    loadChildren:()=>import('@modules/blog/blog.module').then(m=>m.BlogModule)
  },
  {
    path:'shop',
    loadChildren:()=>import('@modules/shop/shop.module').then(m=>m.ShopModule)
  },
  {
    path:'me',
    loadChildren:()=>import('@modules/me/me.module').then(m=>m.MeModule)
  },
  {
    path:'**',
    redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitRoutingModule { }
