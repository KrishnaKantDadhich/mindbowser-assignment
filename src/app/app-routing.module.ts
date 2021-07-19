import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './core/authGuard/auth.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  { path: 'auth', loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule) }, 
  { path: 'home', canActivate: [AuthService], loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
