import { Component, OnInit, Input, OnChanges ,SimpleChanges} from '@angular/core';
import { Course } from '../courses/course';
import { ForumService } from './forum.service';
import { ForumMessage } from './forum.message';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
@Input() course: Course;
messages: ForumMessage[];
  constructor(private forumService: ForumService) { 
  
  }
  ngOnInit(): void {
  this.messages = this.forumService.getMessages(this.course.name);
  }

   ngOnChanges(changes: SimpleChanges) {
   this.messages = this.forumService.getMessages(this.course.name);
   }
}
