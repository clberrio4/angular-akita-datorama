import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { User } from 'src/app/models/user.model';

export interface UsersState {
  users: User[];
  cursor?: { afterCursor: string, beforeCursor: string },
  user?: User
}


export function createInitialState(): UsersState {
  return {
    users: undefined,
    cursor: undefined
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'users' })
export class UsersStore extends Store<UsersState> {

  constructor() {
    super(createInitialState());
  }

}
