import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
	 constructor(public authService: AuthService, public router: Router) {
	  if (this.authService.isLoggedIn) { 
            this.router.navigate(['/home']);
        }

	 }

    login() {
    this.authService.login().subscribe(() => {
     
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/home';

        // Redirect the user
        this.router.navigate([redirectUrl]);
      }
    });

	}
}
