import {Component} from '@angular/core';
import {Course} from '../_service/course/course';

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
