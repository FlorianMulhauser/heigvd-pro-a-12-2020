import { Component, OnInit, Input, OnChanges ,SimpleChanges} from '@angular/core';
import { Course } from '../courses/course';
import { ForumService } from './forum.service';
import { ForumMessage } from './forum.message';
import { FormBuilder, FormGroup } from "@angular/forms";
import { JwtHelperService } from "@auth0/angular-jwt";
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
@Input() course: Course;
messages: ForumMessage[];
form: FormGroup;
helper = new JwtHelperService();
  constructor(public fb: FormBuilder,private forumService: ForumService) { 
    this.form = this.fb.group({
      title: [''],
      content: [''],
      course_id: [''],
      author: [''],
      upVote: 0,
      downVote: 0,
    });
  }
  ngOnInit(): void {
  this.forumService.getMessages(this.course._id).subscribe((data: ForumMessage[]) => this.messages = data);

  }

   ngOnChanges(changes: SimpleChanges) {
    this.forumService.getMessages(this.course._id).subscribe((data: ForumMessage[]) => this.messages = data);
   }


   submitForm() {
     console.log(this.messages);
    this.form.patchValue({course_id:this.course._id});
    this.form.patchValue({author:"to be changed serverside"});
    this.forumService.addMessage(this.form.value).subscribe((data) =>  {
      console.log(data);
     if(data._id != null)
     this.forumService.getMessages(this.course._id).subscribe((data: ForumMessage[]) => this.messages = data);
    } );
  }

  deleteMessage(forumMessage: ForumMessage) { 
     this.forumService.deleteMessage(forumMessage).subscribe((data) =>{

      this.messages = this.messages.filter(c => c !== forumMessage) 
    });

  }
  upVote(forumMessage: ForumMessage) {
    forumMessage.upVote++;
   // this.forumService.upVote(forumMessage);
  }
   downVote(forumMessage: ForumMessage) {
     forumMessage.downVote++;
   //  this.forumService.downVote(forumMessage);
  }
}
