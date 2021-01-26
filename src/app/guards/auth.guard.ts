import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SessionQuery } from '../auth/state/session.query';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _sessionQuery: SessionQuery) { }

  canActivate(): boolean {

    if (this._sessionQuery.isLoggedIn()) {
      return true;
    }
    this.router.navigateByUrl("auth/login");
    return false;
  }

}
