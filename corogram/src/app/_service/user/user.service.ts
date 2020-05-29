import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {User} from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  public userURL = '/api/user';

  public getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.userURL); // .pipe(
      // catchError(this.handleError<User[]>('getUser', [])));
  }

  public addUserCourse(userId, courseId): Observable<User[]> {
    return this.http.put(this.userURL + '/addCourse/' + userId, {"courseId":courseId}).pipe(
      catchError(this.handleError<any>('addUserCourse', [])));
  }

  // permets de créer un user
  public addUser(us: User): Observable<User> {
    return this.http.post<User>(this.userURL, us); // .pipe(catchError(this.handleError('addUser', us)));
  }

  public deleteUser(us: User): Observable<any> {
    return this.http.delete(this.userURL + '/' + us._id); // .pipe(catchError(this.handleError('deleteUser', us)));
  }

  public updateUser(us: User, us_id: String) {
    return this.http.put(this.userURL + '/' + us_id, us).pipe(
      catchError(this.handleError<any>('updateUser', [])));
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
