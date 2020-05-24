import {CATCH_ERROR_VAR} from '@angular/compiler/src/output/output_ast';
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {Course} from '../courses/course';
import {ForumMessage} from '../forum/forum.message';
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

  constructor(public fb: FormBuilder, private chatService: ChatService) {
    this.formchat = this.fb.group({
      content: [''],
      course_id: [''],
      author: [''],
    });

  }

  public ngOnInit(): void {
   this.chatService.getMessages(this.course._id).subscribe((messages) =>  this.messages = messages);
  }

  public ngOnChanges(changes: SimpleChanges) {
    this.chatService.getMessages(this.course._id).subscribe((messages) =>  this.messages = messages);
  }

  public submitForm() {


    this.formchat.patchValue({course_id: this.course._id});
    this.formchat.patchValue({author: JSON.parse(localStorage.getItem('userInfo')).name});




       this.chatService.addMessage(this.formchat.value).subscribe((data) => {
         console.log(data);
         if (data._id != null) {
           this.chatService.getMessages(this.course._id).subscribe((datas) => this.messages = datas);
         }
       });

  }

}
