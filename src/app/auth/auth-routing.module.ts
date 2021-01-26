import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { LoginNotVisibleGuard } from '../guards/login-not-visible.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{ path: "auth/login", pathMatch: "full", component: LoginComponent, canActivate: [LoginNotVisibleGuard] }, {
  path: "auth/signup", component: SignupComponent, pathMatch: "full", canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
