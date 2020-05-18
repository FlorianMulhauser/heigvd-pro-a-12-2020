import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule  } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { tap, delay } from 'rxjs/operators';
// animation 
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
  
  trigger('animationLoadingBar', [
      // ...
      state('s1', style({
        
         opacity: 1,

        
      })),
      state('s2', style({
         opacity: 0,
        
      })),
      
      transition('s2 <=> s1', [
        animate("5s", keyframes([
  style({ opacity: 0.8, offset: 0 }),
  
]))
      ]),
    ]),
  trigger('animationButton', [
      // ...
      state('s1', style({
        
         
        opacity: 0.6,
        
      })),
      state('s2', style({
        opacity: 1,
      })),
      
      transition('s2 <=> s1', [
        animate('1s')
      ]),
    ]),
  ]
})
export class LoginComponent{
  form: FormGroup;
  error = '';
  private redirectUrl = '/home';
	 constructor(private authService: AuthService, private router: Router,private fb:FormBuilder) {
   this.form = this.fb.group({
     userId: ['',Validators.required],
     password: ['',Validators.required]
   });
	  

	 }
   animation = false;
    login() {
      const val = this.form.value;
    this.animation = true;
    if (val.userId && val.password) {
   this.authService.login(val.userId,val.password).subscribe((data) => {
 
        this.router.navigate([this.redirectUrl]);
      },
      error => {
        this.error = error; // to be displayed on template
        console.log(error);
        this.animation = false;
      }
    );
  
	}
}


}
