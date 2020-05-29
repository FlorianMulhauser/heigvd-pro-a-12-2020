import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {CourseService} from '../_service/course/course.service';
import {Course} from '../_service/course/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  selectedCourse: Course;
  @Output() selectedCourseChanged = new EventEmitter<Course>();

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: Course[]) => this.courses = data);
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
    this.selectedCourseChanged.emit(course);
  }

}
