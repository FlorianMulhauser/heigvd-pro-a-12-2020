import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // requete
import { Observable, throwError, of } from 'rxjs'; // observable 
import { catchError, retry } from 'rxjs/operators'; // gerer les probleme http

//header pour gerer les tokens plus tard
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) { }
  	courseUrl = '/api/courses';




   // permets d'obtenir tous les cours	
   getCourses(): Observable<Course[]> {
   	console.log("getting courses");
   	return this.http.get<Course[]>(this.courseUrl).pipe(
   		catchError (this.handleError<Course[]>('getCourses',[])));
  }
  // permets de créer un cours
  addCourse(course: Course): Observable<Course> {
  	console.log(course);
  	return this.http.post<Course>(this.courseUrl,course,httpOptions).pipe(catchError(this.handleError('addCourse', course)));
  }

  deleteCourse(course: Course): Observable<any> {
    console.log(course);
    console.log(this.courseUrl+"/"+course._id);
    return this.http.delete(this.courseUrl+"/"+course._id).pipe(catchError(this.handleError('deleteCourse', course)));
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
