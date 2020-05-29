import {HttpClient} from '@angular/common/http'; // requete
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../_service/auth/auth.service';
import {ModalService} from '../_service/modal/modal-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public error = '';
  public bodyText: string;
  public animation = false;
  private redirectUrl = '/home';

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private modalService: ModalService, private http: HttpClient) {
    this.form = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

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
          this.animation = false;
          this.openModal('custom-modal-1');
        },
      );

    }
  }

}
