import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SessionStore } from './session.store';
import { tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class SessionService {

  constructor(private sessionStore: SessionStore, private http: HttpClient) {

  }

  private URL_BASE: string = environment.url;



  public login(email: string, password: string) {


    return this.http.post("v1/auth/login", { email, password }).pipe(tap((data: any) => this.sessionStore.login(data)));
    // subscribe((data: any) => {
    //   this.sessionStore.setLoading(false);
    //   this.sessionStore._setState({ token: data.token })
    // }, ({ error }) => {
    //   this.sessionStore.setLoading(false);
    //   this.sessionStore.setError(new Error(error.message));
    // })

  }

  public logout() {
    this.sessionStore.logout();
  }

}
