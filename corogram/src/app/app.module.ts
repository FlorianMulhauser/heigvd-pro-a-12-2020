import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {FileUploadModule} from 'ng2-file-upload';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseListComponent} from './course-list/course-list.component';
import {CoursesComponent} from './courses/courses.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {ChatComponent} from './chat/chat.component';
import {ForumComponent} from './forum/forum.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthInterceptor} from './auth/auth.interceptor';
import {HttpClientModule} from '@angular/common/http';

// pour les animations

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ForgotComponent} from './forgot/forgot.component';
import {CourseManagementComponent} from './admin/course-management/course-management.component';

// pour les requetes http

// pour les formulaire reactif..formulaire
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {ModalComponent} from './modal/modal.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CoursesComponent,
    CourseDetailComponent,
    ChatComponent,
    ForumComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    ForgotComponent,
    CourseManagementComponent,
    ModalComponent,
    UserManagementComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
