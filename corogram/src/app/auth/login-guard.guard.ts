import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
 constructor(private authService: AuthService, private router: Router) {}

	canActivate(
	    next: ActivatedRouteSnapshot,
	    state: RouterStateSnapshot): boolean {
	    let url: string = state.url;

	    return this.checkLogin(url);
	  }

	  checkLogin(url: string): boolean {
	    if (localStorage.getItem('currentUser')) { return true; }

	    // Store the attempted URL for redirecting
	    this.authService.redirectUrl = url;

	    // Navigate to the login page with extras
	    this.router.navigate(['/login']);
	    return false;
	  }
	}