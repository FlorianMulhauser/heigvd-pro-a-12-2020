import {HttpClient, HttpHeaders} from '@angular/common/http'; // requete
import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs'; // observable
import {catchError, retry} from 'rxjs/operators'; // gerer les probleme http
import {ForumMessage} from './forum.message';

// header pour gerer les tokens plus tard todo a mettre dans request interceptor
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ForumService {

  constructor(private http: HttpClient) {
  }

  public forumUrl = '/api/forumMessage';

  public getMessages(courseId: string): Observable<ForumMessage[]> {
    return this.http.get<ForumMessage[]>(this.forumUrl + '/' + courseId).pipe(
      catchError(this.handleError<ForumMessage[]>('getMessages', [])));
  }

  // permets de créer un message
  public addMessage(fm: ForumMessage): Observable<ForumMessage> {

    return this.http.post<ForumMessage>(this.forumUrl, fm).pipe(catchError(this.handleError('addForumMessage', fm)));
  }


  public updateMessageVote(fm: ForumMessage): Observable<ForumMessage> {

    return this.http.put<ForumMessage>(this.forumUrl + '/' + fm._id , fm).pipe(catchError(this.handleError('update_a_forum_message', fm)));
  }

  public deleteMessage(msg: ForumMessage): Observable<any> {

    return this.http.delete(this.forumUrl + '/' + msg._id).pipe(catchError(this.handleError('deleteMsg', msg)));
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
