import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Course } from '../course';
import { ChatService } from '../chat.service';
import { ChatMessage } from '../chat.message';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
@Input() course: Course;
  messages: ChatMessage[];

  constructor(private chatService: ChatService) { 
  }

  ngOnInit(): void {
	this.messages = this.chatService.getMessages(this.course.name);
  }
  ngOnChanges(changes: SimpleChanges) {
  	this.messages = this.chatService.getMessages(this.course.name);
  }

}
