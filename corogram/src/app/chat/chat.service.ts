import {Injectable} from '@angular/core';
import {ChatMessage} from './chat.message';
import {CHAT_MESSAGES} from '../mock-chat';

import {ChatManager, TokenProvider, User} from '@pusher/chatkit-client';

const chatManager = new ChatManager({
  instanceLocator: 'v1:us1:95984d78-e43e-47d8-9605-0f4c53fde0ce',
  userId: 'userPRO1',
  tokenProvider: new TokenProvider({url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/95984d78-e43e-47d8-9605-0f4c53fde0ce/token'})
});

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages: ChatMessage[] = [];
  currentUser: User;

  constructor() {
    chatManager.connect()
      .then(currentUser => {
        console.log('Successful connection', currentUser);
        this.currentUser = currentUser;
        currentUser.fetchMultipartMessages({
          roomId: currentUser.rooms[0].id,
          direction: 'older',
          limit: 100,
        })
          .then(messages => {

            // transform into our type
            for (let message of messages) {
              this.messages.push(
                {
                  id: message.senderId,
                  author: message.sender.name,
                  content: message.parts[0].payload.content,
                  timestamp: message.createdAt,
                  tag: 'RES'
                });
            }

          })
          .catch(err => {
            console.log(`Error fetching messages: ${err}`);
          });

      })
      .catch(err => {
        console.log('Error on connection', err);
      });
  }

  // allow to get messages
  getMessages(course: String) {
    return this.messages;//CHAT_MESSAGES.filter(x => x.tag == course);
  }

  sendMessage(message: ChatMessage) {
    console.log(message);
    this.currentUser.sendSimpleMessage({
      text: message.content,
      roomId: this.currentUser.rooms[0].id

    });

  }

}
