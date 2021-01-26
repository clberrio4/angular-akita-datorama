import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionQuery } from '../auth/state/session.query';

@Injectable({
  providedIn: 'root'
})
export class LoginNotVisibleGuard implements CanActivate {
  constructor(private router: Router, private _sessionQuery: SessionQuery) { }

  canActivate(): boolean {
    if (!this._sessionQuery.isLoggedIn === true) {
      this.router.navigate(["auth/login"]);
      return !this._sessionQuery.isLoggedIn;
    }
    this.router.navigate(["users"])

    return !this._sessionQuery.isLoggedIn;
  }

}
