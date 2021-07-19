import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements CanActivate{

  constructor(private _router: Router) { }

  canActivate(): any{

  const token =  localStorage.getItem('userID');
    if(!token){
    this._router.navigate(['/'])
    } else{
      return true;
    }
    
  }
}
