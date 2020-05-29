import { Component, Input, OnInit } from '@angular/core';
// pour créer des utilisateurs
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {User} from '../../_service/user/user';
// pour afficher les cours pour attribuer a l'utilisateur
import {Course} from '../../_service/course/course';
import {CourseService} from '../../_service/course/course.service';
import {FilterPipe} from '../../pip/filter-pipe.pipe';

// pour la gestion des utilisateurs
import {UserService} from '../../_service/user/user.service';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  public form: FormGroup;

  public courses: Course[];
  public users: User[];
  // search text property
  public searchText: string;

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
    this.courseService.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
      this.userService.getAllUser().subscribe((datas) => {
       datas.forEach((user) => {
      user.course.forEach(function(c, i, arr) {
        try {
          arr[i] = data.find((element) => element._id == arr[i]).name;
        }  catch (err) {} // si le cours existe pas c'est normal , cela peut arriver si cours supprimé
      });
    });
       this.users = datas;

    });
    });

    }

	public submitForm() {

    this.userService.addUser(this.form.value).subscribe((data) => {
      if (data._id != null) {
        this.userService.getAllUser().subscribe((datas) =>  {
         this.users = datas;
        });
      }
    });
  }

  public submitFormEdit(user: User) {
    this.userService.updateUser(this.form.value, user._id).subscribe((data) => {
      if (data._id != null) {
        this.userService.getAllUser().subscribe((datas) =>  {
         this.users = datas;
        });
      }
    });

  }

  public deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe((data) => {
     this.users = this.users.filter((x) => x != user);
      });

  }
}

