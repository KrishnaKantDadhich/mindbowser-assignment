import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(private _fb: FormBuilder, private _router: Router, private _service: LoginService) { }
  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  /****************************************
   * login
   * @purpose: this is used to  login
   ****************************************/
  login() {
    const reqData = {
      "email": this.loginForm.value.username,
      "password": this.loginForm.value.password
    }
    this._service.login(reqData).subscribe(res => {
      localStorage.setItem('userID', this.loginForm.value.username)
      this._router.navigate(['/home'])
    })
  }
  /****************************************
   * signUp()
   * @purpose: this is used to navigate to auth module for manager signUp
   ****************************************/
  signUp() {
    this._router.navigate(['/auth'])
  }

}

