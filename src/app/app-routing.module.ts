import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@modules/auth/pages/login-page/login-page.component';
import { InitPageComponent } from '@modules/init/pages/init-page/init-page.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('@modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'',
    component:InitPageComponent,
    loadChildren: ()=>import('@modules/init/init.module').then(m=>m.InitModule)
  },
  {
    path:'**',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
