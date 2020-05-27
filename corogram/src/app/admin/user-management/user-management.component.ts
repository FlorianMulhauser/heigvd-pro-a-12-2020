import { Component, OnInit } from '@angular/core';
// pour créer des utilisateurs
import {FormBuilder, FormGroup} from '@angular/forms';
// pour afficher les cours pour attribuer a l'utilisateur
import {Course} from '../../courses/course';
import {CourseService} from '../../courses/course.service';

// pour la gestion des utilisateurs
import {UserService} from './user.service';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  public form: FormGroup;
  public courses: Course[];
  constructor(public fb: FormBuilder, private courseService: CourseService,private userService: UserService) {
  	this.form = this.fb.group({
  		first_name: [''],
  		last_name: [''],
  		email: [''],
  		password: [''],
  		user_name: ['']
  	})
   }

  ngOnInit(): void {
  }
	public submitForm() {
   	console.log(this.form.value);
    /* this.userService.addCourse(this.form.value).subscribe((data) => {
      if (data._id != null) {
        this.user.push(data);
      }
    }); */
  }
}
