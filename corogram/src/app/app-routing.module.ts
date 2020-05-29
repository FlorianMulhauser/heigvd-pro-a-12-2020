import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {LoginGuardGuard} from './auth/login-guard.guard';
import {ForgotComponent} from './forgot/forgot.component';
import {CourseManagementComponent} from './admin/course-management/course-management.component';
import {UserManagementComponent} from './admin/user-management/user-management.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [LoginGuardGuard],},
  {path: 'forgot', component: ForgotComponent},
  {path: 'management', component: CourseManagementComponent, canActivate: [LoginGuardGuard]},
  {path: 'user-management', component: UserManagementComponent, canActivate: [LoginGuardGuard]},
  {path: '**', component: LoginComponent}, // wildcard componant

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
