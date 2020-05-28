import { Component, OnInit, Input } from '@angular/core';
// pour créer des utilisateurs
import {FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
 
  filterName:User;
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
      this.courses = data
      this.userService.getAllUser().subscribe((datas) => { 
       datas.forEach(user => {
      user.course.forEach(function(c,i,arr) {
        try {
          arr[i] = data.find(element => element._id == arr[i]).name;
        }  catch(err) {} // si le cours existe pas c'est normal , cela peut arriver si cours supprimé
      });
    })
      this.users = datas;

    })
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
    this.userService.updateUser(this.form.value,user._id).subscribe((data) => {
      if (data._id != null) {
        this.userService.getAllUser().subscribe((datas) =>  {
         this.users = datas;
        });
      }
    });
    
  }

  public deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe((data) => {
     this.users = this.users.filter(x => x != user);
      });
   
  }


  public addUserCourse(idUser: String, idCourse: String) {
    this.userService.addUserCourse(idUser, idCourse).subscribe((data) => {
      console.log(data);
    });
  }
  public editUser(user: User) {
   
  }
}



