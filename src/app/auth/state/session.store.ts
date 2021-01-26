import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { SessionStorage } from 'src/app/@localstorage/token.storage';

export interface SessionState {
  token: string;
  name?: string;
  lastname?: string;
}

export function createInitialState(): SessionState {
  const storage = new SessionStorage();
  return {
    token: "",
    lastname: "",
    name: "",
    ...storage.getSession()
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  private storage: SessionStorage;
  constructor() {
    super(createInitialState());
    this.storage = new SessionStorage();
  }

  login(session: SessionState) {
    this.update(session);
    this.storage.setSession(session);
  }

  logout() {
    this.storage.clearSession();
    this.update(createInitialState());
  }

}
