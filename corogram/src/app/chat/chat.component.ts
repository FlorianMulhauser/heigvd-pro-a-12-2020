import {CATCH_ERROR_VAR} from '@angular/compiler/src/output/output_ast';
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RandomColorService} from '../_service/random-color.service';
import {SseService} from '../_service/sse.service';

import {Course} from '../courses/course';
import {ForumMessage} from '../forum/forum.message';
import {ForumService} from '../forum/forum.service';
import {ChatMessage} from './chat.message';
import {ChatService} from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  @Input() public course: Course;
  public name: String;
  public messages: ChatMessage[];
  public formchat: FormGroup;

   public fMsg = new class implements ForumMessage {
    public _id: String;
    public author: String;
    public color: String;
    public content: String;
    public downVote: number;
    public fileName: String;
    public tag: String;
    public timestamp: String;
    public title: String;
    public upVote: number;
    public course_id: String;
  };

  constructor(public fb: FormBuilder, private chatService: ChatService, private forumService: ForumService, private randomColorService: RandomColorService, private sseService: SseService) {
    this.formchat = this.fb.group({
      content: [''],
      course_id: [''],
      author: [''],
    });

  }

  public ngOnInit(): void {

    this.sseService.getServerSentChatEvent().subscribe((data) => {
      this.chatService.getMessages(this.course._id).subscribe((messages) =>  this.messages = messages);
    })
    this.chatService.getMessages(this.course._id).subscribe((messages) =>  this.messages = messages);
  }
  public ngOnChanges(changes: SimpleChanges){
    this.chatService.getMessages(this.course._id).subscribe((messages) =>  this.messages = messages);
  }

  public transForum(message: ChatMessage) {

    this.fMsg.author = message.author;
    this.fMsg.content = message.content;
    this.fMsg.timestamp = message.timestamp;
    this.fMsg.color = this.randomColorService.getColor();
    this.fMsg.title = 'Bonne remarque ';
    this.fMsg.course_id = this.course._id;

    

    this.forumService.addMessage(this.fMsg).subscribe((data) => console.log(data) );
  }

  public submitForm() {

    this.formchat.patchValue({course_id: this.course._id});
    this.formchat.patchValue({author: JSON.parse(localStorage.getItem('userInfo')).name});

    this.chatService.addMessage(this.formchat.value).subscribe((data) => {
         console.log(data);
       });
    this.formchat.patchValue({content:""});

  }

}
