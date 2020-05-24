import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ChatMessage} from './chat.message';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http: HttpClient) {
  }

  public chatUrl = '/api/chatMessage';

  public getMessages(courseId: string): Observable<ChatMessage[]> {
    return this.http.get<ChatMessage[]>(this.chatUrl + '/' + courseId).pipe(
      catchError(this.handleError<ChatMessage[]>('getMessages', [])));
  }

  // permets de créer un cours
  public addMessage(fm: ChatMessage): Observable<ChatMessage> {
    return this.http.post<ChatMessage>(this.chatUrl, fm).pipe(catchError(this.handleError('addChatMessage', fm)));
  }

  public deleteMessage(msg: ChatMessage): Observable<any> {
    return this.http.delete(this.chatUrl + '/' + msg._id).pipe(catchError(this.handleError('deleteMsg', msg)));
  }

// todo export in different sevice /class (duplicate code)
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
