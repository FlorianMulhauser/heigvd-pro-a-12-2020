import { Component, OnInit, Input, OnChanges ,SimpleChanges} from '@angular/core';
import { Course } from '../courses/course';
import { ForumService } from './forum.service';
import { ForumMessage } from './forum.message';
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
@Input() course: Course;
messages: ForumMessage[];
form: FormGroup;
  constructor(public fb: FormBuilder,private forumService: ForumService) { 
    this.form = this.fb.group({
      title: [''],
      content: [''],
      course_id: [''],
      author: ['']
    });
  }
  ngOnInit(): void {
  this.forumService.getMessages(this.course._id).subscribe((data: ForumMessage[]) => this.messages = data);
  }

   ngOnChanges(changes: SimpleChanges) {
    this.forumService.getMessages(this.course._id).subscribe((data: ForumMessage[]) => this.messages = data);
   }


   submitForm() {
    this.form.patchValue({course_id:this.course._id});
    this.form.patchValue({author:"to change"});
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
}
