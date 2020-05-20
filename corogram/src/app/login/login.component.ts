// animation
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
  // ...
} from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators  } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import { delay, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import {ModalService} from '../modal-service.service';


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
        animate('5s', keyframes([
  style({ opacity: 0.8, offset: 0 }),

])),
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
        animate('1s'),
      ]),
    ]),
  ],
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private modalService: ModalService) {
     this.form = this.fb.group({
       userId: ['', Validators.required],
       password: ['', Validators.required],
     });
	 }
  public form: FormGroup;
  public error = '';
  public bodyText: string;
  private redirectUrl = '/home';
   public animation = false;

  public ngOnInit() {
    this.bodyText = 'erreur de login';
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

    public login() {
      const val = this.form.value;
      this.animation = true;
      if (val.userId && val.password) {
   this.authService.login(val.userId, val.password).subscribe((data) => {

        this.router.navigate([this.redirectUrl]);
      },
      (error) => {
        this.error = error; // to be displayed on template
        console.log(error);
        this.openModal('modal-errorLogin');
        this.animation = false;
      },
    );

	}
}

}
