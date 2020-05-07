import { Component, OnInit } from '@angular/core';
import {Course} from '../courses/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public selectedCourse: Course;
  public selectCourse(course: Course) {
    this.selectedCourse = course;
  }

}
