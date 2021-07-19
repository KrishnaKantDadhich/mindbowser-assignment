import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// import { apiEndpointUrl } from 'src/app/config/api-endpoins';
const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /****************************************
     * login()
     * @purpose: this is used to manager login
     ****************************************/
  public login(data: any){
  
    return this._http
    .post("http://localhost:3000/managerProfile", data, httpOptions)
    .pipe(
      map((body: any) => body),
      catchError(() => throwError('Sorry something went wrong in api'))
    )
  }
  
  constructor(private _http: HttpClient) { }

}
