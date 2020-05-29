import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../_service/course/course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  @Input() course: Course;

  constructor() {
  }

  ngOnInit(): void {
  }

}
