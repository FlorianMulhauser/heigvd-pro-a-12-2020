import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {LoginGuardGuard}  from './login-guard.guard'


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [LoginGuardGuard],},
  { path: '**', component: LoginComponent  }, // wildcard componant 
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
