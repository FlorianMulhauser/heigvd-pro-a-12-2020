import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http'; // requete
import {JwtHelperService} from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public helper = new JwtHelperService();
  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor(private http: HttpClient) {

  }

  public login(userId: string, password: string) {


    return this.http.post<any>('/api/login', {userId, password}).pipe(map((data) => {

      console.log(data);
      localStorage.setItem('currentUser', JSON.parse(data).jwtBearerToken);

      localStorage.setItem('userInfo', JSON.stringify(JSON.parse(data).user));

      return JSON.parse(data).jwtBearerToken;
    }));

    // share replay here

    // here we need to add .shareReplay or so to  prevent
    // user from making mutliple request
  }
  public getToken() {

    if (localStorage.getItem('currentUser') == null) {
      return 'tmp_User?';
    }

    return localStorage.getItem('currentUser');
  }

}
