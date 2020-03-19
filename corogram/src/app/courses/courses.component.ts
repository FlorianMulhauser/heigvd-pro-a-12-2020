import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
courses: Course[];
selectedCourse: Course;
  constructor(private courseService: CourseService) { 
  this.courses = this.courseService.getCourses();
  }
  ngOnInit(): void {
  this.getCourses();
  }
  selectCourse(course: Course) { this.selectedCourse = course;}

}
