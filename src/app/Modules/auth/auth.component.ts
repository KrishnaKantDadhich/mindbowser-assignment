import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  showMessage : boolean =false;

  /****************************************
   * manager registration form
   * @purpose: this is used to  register new manager
   ****************************************/

  managerRegisterForm = this._fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    password: ['',Validators.required],
    confirmPassword: ['',Validators.required],
    address: ['', Validators.required],
    email: ['', Validators.required],
    dob: ['', Validators.required]
  })

  public loginForm!: FormGroup;
  constructor(private _router: Router, private _fb: FormBuilder,
    private _service: LoginService, private _sharedService : SharedService) { }
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

  }

  /****************************************
   * registerManager()
   * @purpose: this is used to register manager
   ****************************************/

  registerManager() {

    const reqData = {

      "firstName":this.managerRegisterForm.value.firstName,
      "lastName":this.managerRegisterForm.value.lastName,
      "password":this.managerRegisterForm.value.password,
      "address": this.managerRegisterForm.value.address,
      "birthdate":this.managerRegisterForm.value.dob,
      "email":this.managerRegisterForm.value.email,
    }

    this._sharedService.registerManager(reqData).subscribe(res => {
      console.log(res);
      console.log(reqData);
      this.showMessage = true;
      this.managerRegisterForm.reset();
    })
  }

  /****************************************
   * onSubmit
   * @purpose: this is used to be a new manager registration 
   ****************************************/

  onSubmit(): void {

    console.log("hey Krishna!")
    this.registerManager()

  }





}


