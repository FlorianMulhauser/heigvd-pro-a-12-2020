import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
@Input() course: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
