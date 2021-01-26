import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlistComponent } from './@components/userlist/userlist.component';
import { SharedModule } from "./../shared/shared.module";
import { UseritemComponent } from './@components/userlist/useritem/useritem.component';
@NgModule({
  declarations: [UserlistComponent, UseritemComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ]
})
export class UserModule { }
