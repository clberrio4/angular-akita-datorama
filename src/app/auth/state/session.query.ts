import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SessionStore, SessionState } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {

  constructor(protected store: SessionStore) {
    super(store);
  }

  selectIsLogin$ = this.select('token');
  selectName$ = this.select("name");


  isLoggedIn() {
    return this.getValue().token.length === 0 ? false : true;
  }


}
