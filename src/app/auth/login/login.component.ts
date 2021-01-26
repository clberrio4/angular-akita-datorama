import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionQuery } from '../state/session.query';
import { SessionService } from '../state/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

  isLoading$ = this._sessionquery.selectLoading();
  token$ = this._sessionquery.selectIsLogin$;



  public loginForm: FormGroup;
  public errorEmail: any;
  public errorPassword: any;

  constructor(private _sessionquery: SessionQuery, private _sessionService: SessionService, private router: Router) {


    this.loginForm = new FormGroup({
      "email": new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      "password": new FormControl("", [Validators.required])
    });

    this.errorEmail = this.loginForm.controls["email"];
    this.errorPassword = this.loginForm.controls["password"];

  }


  public onSubmit(e: Event) {
    e.preventDefault();

    if (this.loginForm.valid) {

      const email = this.loginForm.controls["email"].value;
      const password = this.loginForm.controls["password"].value;

      this._sessionService.login(email, password).subscribe(() => {
        this.router.navigate(["users"])
      });
    }

  }


  ngOnInit(): void {

  }

}
