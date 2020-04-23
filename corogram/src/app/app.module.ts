import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ChatComponent } from './chat/chat.component';
import { ForumComponent } from './forum/forum.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// pour les animations 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
