import { Injectable } from '@angular/core';
import { ForumMessage } from './forum.message';
import { FORUM_MESSAGES } from './mock-forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor() { }
  getMessages(course: String) {
  return FORUM_MESSAGES.filter(x => x.tag == course);
  }
}
