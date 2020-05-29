import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SseService {

  private ChatEventUrl = '/api/event/chat';
  private ForumEventUrl = '/api/event/forum';
  constructor(private _zone: NgZone) {}

  public getServerSentChatEvent(): Observable<any> {
    return Observable.create((observer) => {
      const eventSource = this.getEventSource(this.ChatEventUrl);

      eventSource.onmessage = (event) => {
        this._zone.run(() => {
          observer.next(event);
        });
      };

      eventSource.onerror = (error) => {
        this._zone.run(() => {
          observer.error(error);
        });
      };
    });
  }

  public getServerSentForumEvent(): Observable<any> {
    return Observable.create((observer) => {
      const eventSource = this.getEventSource(this.ForumEventUrl);

      eventSource.onmessage = (event) => {
        this._zone.run(() => {
          observer.next(event);
        });
      };

      eventSource.onerror = (error) => {
        this._zone.run(() => {
          observer.error(error);
        });
      };
    });
  }

  private getEventSource(url: string): EventSource {

    return new EventSource(url);
  }

}
