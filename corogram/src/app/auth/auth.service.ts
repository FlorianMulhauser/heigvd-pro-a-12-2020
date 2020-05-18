import { Injectable } from '@angular/core';

import { Observable, of , } from 'rxjs';
import { tap, delay, shareReplay, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders ,HttpClientModule } from '@angular/common/http'; // requete
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
helper = new JwtHelperService();
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  constructor(private http: HttpClient) {
 
  }

  login(userId:String, password: String)  {
    
    return this.http.post<any>('/api/login',{userId,password}).pipe(map(user => {
      localStorage.setItem('currentUser',user);
       
      return user;
    }));
    
     //share replay here
    ;
    // here we need to add .shareReplay or so to  prevent 
    // user from making mutliple request
  }
   
 logout() {
   localStorage.removeItem('currentUser');
 }

    
  
}