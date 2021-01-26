import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { UsersQuery } from './users.query';
import { UsersStore } from './users.store';
@Injectable({ providedIn: 'root' })
export class UsersService {

  constructor(private usersStore: UsersStore, private usQuery: UsersQuery, private http: HttpClient) {
  }

  getUsers(afterCursor?: string) {
    if (typeof afterCursor === "undefined" || afterCursor.length === 0) {
      return this.http.get("v1/user").pipe(tap((obj: any) => this.usersStore.update({ users: obj.data, cursor: obj.cursor })))
    } else {

      let usersData: User[];
      this.usQuery.getUsers().subscribe(users => usersData = users);

      return this.http.get("v1/user", { params: { afterCursor } }).pipe(tap((obj: any) => this.usersStore.update({ users: usersData.concat(obj.data), cursor: obj.cursor })))
    }

  }

  getUserByID(id: number) {
    return this.http.get(`v1/user/${id}`).pipe(tap((obj: any) => this.usersStore.update({ user: obj.data })))
  }

}
