import {HttpClient, HttpHeaders} from '@angular/common/http'; // requete
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs'; // observable
import {Course} from './course';

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
export class CourseService {
  constructor(private http: HttpClient) {
  }

  public courseUrl = '/api/courses';

  // permets d'obtenir tous les cours
  public getCourses(): Observable<Course[]> {
    console.log('getting courses');
    return this.http.get<Course[]>(this.courseUrl);

  }

  // permets de créer un cours
  public addCourse(course: Course): Observable<Course> {
    console.log(course);
    return this.http.post<Course>(this.courseUrl, course, httpOptions);
  }

  public deleteCourse(course: Course): Observable<any> {
    console.log(course);
    console.log(this.courseUrl + '/' + course._id);
    return this.http.delete(this.courseUrl + '/' + course._id);
  }

// todo export in different service /class (duplicate code)
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
