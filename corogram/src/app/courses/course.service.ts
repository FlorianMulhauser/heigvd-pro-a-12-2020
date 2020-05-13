import { Injectable } from '@angular/core';
import { Course } from './course';
import { COURSES } from '../mock-courses';
import { HttpClient } from '@angular/common/http'; // requete
import { Observable, throwError, of } from 'rxjs'; // observable 
import { catchError, retry } from 'rxjs/operators'; // gerer les probleme http
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) { }
  	courseUrl = '/api/courses';
   getCourses(): Observable<Course[]> {
   	console.log("getting courses");
   	return this.http.get<Course[]>(this.courseUrl).pipe(
   		catchError (this.handleError<Course[]>('getCourses',[])));
  }


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
