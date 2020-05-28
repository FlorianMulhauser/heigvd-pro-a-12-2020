import { Component, OnInit } from '@angular/core';
// pour créer des utilisateurs
import {FormBuilder, FormGroup} from '@angular/forms';
// pour afficher les cours pour attribuer a l'utilisateur
import {Course} from '../../courses/course';
import {CourseService} from '../../courses/course.service';
import {User} from './user';

// pour la gestion des utilisateurs
import {UserService} from './user.service';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  public form: FormGroup;
  public courses: Course[];
  public users: User[];
  constructor(public fb: FormBuilder, private courseService: CourseService, private userService: UserService) {
  	this.form = this.fb.group({
  		first_name: [''],
  		last_name: [''],
  		mail: [''],
  		password_hash: [''],
  		name: [''],
      status: [''],
  	});
   }

  public ngOnInit(): void {
    this.userService.getAllUser().subscribe((datas) => this.users = datas);
  }

	public submitForm() {
   	console.log(this.form.value);
    this.userService.addUser(this.form.value).subscribe((data) => {
      if (data._id != null) {
        this.userService.getAllUser().subscribe((datas) => this.users = datas);
      }
    });
  }

  public deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe((data) => {
      if (data._id != null) {
        this.userService.getAllUser().subscribe((datas) => this.users = datas);
      }
    });
  }

  public getCourseName(id: String) {
    this.courseService.getCourse(id).subscribe((data) => {
      console.log(data.name);
    });
  }

  public addUserCourse(idUser: String, idCourse: String) {
    this.userService.addUserCourse(idUser, idCourse).subscribe((data) => {
      console.log(data);
    });
  }
}
