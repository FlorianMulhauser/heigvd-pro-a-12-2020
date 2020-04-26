import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Course } from '../courses/course';
import { ChatService } from './chat.service';
import { ChatMessage } from './chat.message';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
@Input() course: Course;
name : String;
  messages: ChatMessage[];

  constructor(private chatService: ChatService, ) { 
  }

  ngOnInit(): void {
	this.messages = this.chatService.getMessages(this.course.name);
  }
  ngOnChanges(changes: SimpleChanges) {
  	this.messages = this.chatService.getMessages(this.course.name);
  }

  sendMessage(message: String) {
  	

  this.chatService.sendMessage({
  	id: 0,
	author: "jean mich",
	content: message,
	timestamp: "0000",
	tag: this.course.name
  });
 
  }

}
