import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {JwtHelperService} from '@auth0/angular-jwt';
import {RandomColorService} from '../_service/random-color.service';
import {Course} from '../courses/course';
import {ForumMessage} from './forum.message';
import {ForumService} from './forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
})
export class ForumComponent implements OnInit {
  @Input() public course: Course;
  public messages: ForumMessage[];
  public form: FormGroup;
  public helper = new JwtHelperService();

  constructor(public fb: FormBuilder, private forumService: ForumService, private randomColorService: RandomColorService) {
    this.form = this.fb.group({
      title: [''],
      content: [''],
      course_id: [''],
      author: [''],
      upVote: 0,
      downVote: 0,
      color: [''],
    });
  }

  private updateMessage(){


    this.messages.sort( (a, b) =>{
      if ((a.upVote - a.downVote) > (b.upVote - b.downVote)) {
        return -1;
      }
      if ((a.upVote - a.downVote) < (b.upVote - b.downVote)) {
        return 1;
      }
      return 0;
    });



  }

  public ngOnInit(): void {
    this.forumService.getMessages(this.course._id).subscribe((data: ForumMessage[]) => {
      this.messages = data;
      this.updateMessage();
    });
  }

  public ngOnChanges(changes: SimpleChanges) {
    this.forumService.getMessages(this.course._id).subscribe((data: ForumMessage[]) => this.messages = data);
    this.updateMessage();
  }

  public submitForm() {
    console.log(this.messages);
    this.form.patchValue({course_id: this.course._id});
    this.form.patchValue({author: 'to be changed serverside'});
    this.form.patchValue({color: this.randomColorService.getColor()});
    this.forumService.addMessage(this.form.value).subscribe((data) => {
      console.log(data);
      if (data._id != null) {
        this.forumService.getMessages(this.course._id).subscribe((data: ForumMessage[]) => this.messages = data);
      }
    });
  }

  public deleteMessage(forumMessage: ForumMessage) {
    this.forumService.deleteMessage(forumMessage).subscribe((data) => {

      this.messages = this.messages.filter((c) => c !== forumMessage);
    });

  }

  public upVote(forumMessage: ForumMessage) {
    forumMessage.upVote++;
    this.forumService.updateMessageVote(forumMessage).subscribe((data) => {
      console.log(data);
    });
    this.updateMessage();
  }

  public downVote(forumMessage: ForumMessage) {
    forumMessage.downVote++;
    this.forumService.updateMessageVote(forumMessage).subscribe((data) => {
      console.log(data);
    });
    this.updateMessage();
  }

}
