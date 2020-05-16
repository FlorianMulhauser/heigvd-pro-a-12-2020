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
	 constructor(public authService: AuthService, public router: Router) {
   this.animation = false;
	  if (this.authService.isLoggedIn) { 
            this.router.navigate(['/home']);
        }

	 }
   animation = false;
    login() {
    this.animation = true;

   this.authService.login().subscribe(() => {
     
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/home';

        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });
  
	}


}
