import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Course} from '../../courses/course';
import {CourseService} from '../../courses/course.service';
import {UserService} from '../../_service/user.service';
import {User} from '../../_service/user';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css'],
})
export class CourseManagementComponent implements OnInit {

  public form: FormGroup;
  public courses: Course[];

  public users: User[];

  //pour choisir des users
  public selectingUser: boolean;
  public usersToAdd: User[];

  constructor(public fb: FormBuilder, private courseService: CourseService, private userService: UserService) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
    });    
    this.usersToAdd = [];
  }

  public ngOnInit(): void {
    this.userService.getAllUser().subscribe((data) => { 
      
      this.users = data
      this.users.forEach(user => user.edit = false); });
    this.courseService.getCourses().subscribe((data: Course[]) => {

     this.courses = data
     this.courses.forEach(course => course.selected = false);
    }  );
  }

  public submitForm() {
    this.courseService.addCourse(this.form.value).subscribe((data) => {
      if (data._id != null) {
        this.courses.push(data);
      }
    });
  }

  public deleteCourse(course: Course) {
      if(!course.selected) {
        course.selected = false;
        this.selectingUser = false;
      }
    this.courseService.deleteCourse(course).subscribe((data) =>
      { 
     this.courses = this.courses.filter((c) => c !== course) });

  }

  public selectCoursToAdd(course) {
    if(!this.selectingUser || course.selected) {
    course.selected = !course.selected;
    this.selectingUser = !this.selectingUser;
    if(!course.selected) {

      this.usersToAdd = [];
      this.users.forEach(user => user.edit = false);
    }
  }
  }

  public addToList(user) {
    // todo add check if user alrdy in list
    if(!user.edit) { 
    user.edit = !user.edit;
    this.usersToAdd.push(user);
  } else {
    user.edit = !user.edit;
    this.usersToAdd = this.usersToAdd.filter(x => x == user);
  }

  }

  public addCourseToSelectedUser(course) {
    // revert property
    this.selectingUser = false;
    
     this.usersToAdd.forEach(user => this.userService.addUserCourse(user._id, course._id).subscribe((data) => {
      console.log(data);
     })
    ); 

    // reset table to add 
    this.usersToAdd = [];
  }

  
}
