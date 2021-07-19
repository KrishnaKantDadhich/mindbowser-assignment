import { map, catchError } from 'rxjs/operators';

import { Subject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(private _http: HttpClient) { }

  /****************************************
     * getEmployees()
     * @purpose: this is used to get the list of all employees
     ****************************************/

  public getEmployees() {
    return this._http
      .get(" http://localhost:3000/employeesList")
      .pipe(
        map((body: any) => body),
        catchError(() => throwError('Sorry something went wrong in api'))
      )

  }

  /****************************************
     * registerManager()
     * @purpose: this is used to register manager
     ****************************************/

  public registerManager(data: any) {
    return this._http
      .post("http://localhost:3000/managerProfile", data, httpOptions)
      .pipe(
        map((body: any) => body),
        catchError(() => throwError('Sorry something went wrong in api'))
      )

  }

  /****************************************
     * addEmployee()
     * @purpose: this is used to add employee by manager
     ****************************************/

  public addEmployee(data: any) {
    return this._http
      .post("http://localhost:3000/employeesList", data, httpOptions)
      .pipe(
        map((body: any) => body),
        catchError(() => throwError('Sorry something went wrong in api'))
      )
  }

  /****************************************
     * deleteEmployee()
     * @purpose: this is used to delete employee data by manager
     ****************************************/

  public deleteEmployee(emp: any) {
    return this._http
      .delete("http://localhost:3000/employeesList/" + emp.id)
      .pipe(
        map((body: any) => body),
        catchError(() => throwError('Sorry something went wrong in api'))
      )
  }


  
  /****************************************
     * editEmployee()
     * @purpose: this is used to edit employee data by manager
     ****************************************/

  public editEmployee(data: any) {
    return this._http
      .post("http://localhost:3000/employeesList",data, httpOptions)
      .pipe(
        map((body: any) => body),
        catchError(() => throwError('Sorry something went wrong in api'))
      )
  }


}
