import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from '../mock-courses';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() { }

   getCourses() {
   return COURSES;
  }
}
