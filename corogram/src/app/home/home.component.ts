import {Component} from '@angular/core';
import {Course} from '../_service/course/course';
import {ForumMessage} from '../_service/forum/forum.message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  public selectedCourse: Course;
  public statu: boolean;


  public ngOnInit(): void {
    this.statu = JSON.parse(localStorage.getItem('userInfo')).status  !== 'user';
  }

  public selectCourse(course: Course) {
    this.selectedCourse = course;
  }

}
