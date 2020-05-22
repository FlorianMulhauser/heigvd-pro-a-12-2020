import {Component} from '@angular/core';
import {Course} from './courses/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corogram';

  public logged: boolean;

  constructor() {
    this.logged = false;
  }

  setLog() {
    this.logged = true;

  }

  ngOnInit() {
  }
}
