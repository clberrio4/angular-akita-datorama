import { Component, OnInit } from '@angular/core';
import { UsersQuery } from '../../state/users.query';
import { UsersService } from '../../state/users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor(private userServ: UsersService, private usQuery: UsersQuery) { }

  public disabled: string;

  ngOnInit(): void {
    this.userServ.getUsers().subscribe(data => {
      this.disabled = data?.cursor?.afterCursor || undefined;
    })
  }
  users$ = this.usQuery.getUsers();



  public loadMoreUsers() {
    let afterCursor;
    this.usQuery.select(data => data.cursor.afterCursor).subscribe(cursor => {
      afterCursor = cursor;

    });


    this.userServ.getUsers(afterCursor).subscribe(data => {
      this.disabled = data?.cursor?.afterCursor || undefined;
    })
  }
}
