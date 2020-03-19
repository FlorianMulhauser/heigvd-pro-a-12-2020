import { Injectable } from '@angular/core';
import { ChatMessage } from './chat.message';
import {CHAT_MESSAGES} from './mock-chat';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  getMessages(course: String) {
   return CHAT_MESSAGES.filter(x => x.tag == course);
  }
}
