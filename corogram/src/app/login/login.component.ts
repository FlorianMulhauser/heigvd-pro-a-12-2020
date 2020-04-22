import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {Course} from '../course';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
	
@Output() changeLog = new EventEmitter<boolean>();
    setLog(){
       this.changeLog.emit(true);
    }

}
