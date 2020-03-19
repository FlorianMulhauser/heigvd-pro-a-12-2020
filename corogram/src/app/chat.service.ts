import { Injectable } from '@angular/core';
import { ChatMessage } from './chat.message';
import {CHAT_MESSAGES} from './mock-chat';


import { ChatManager, TokenProvider } from '@pusher/chatkit-client'


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  getMessages(course: String) {
   return CHAT_MESSAGES.filter(x => x.tag == course);
  }
}
