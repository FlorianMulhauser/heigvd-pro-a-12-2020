import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
@Input() course: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
