import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/core/services/shared/shared.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profile: any;
  employeesList: any;
  public x : any;
 
  


  /****************************************
   * addEmployeeForm
   * @purpose: this is used to add new employee by manager
   ****************************************/
  addEmployeeForm = this._fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dob: ['', Validators.required],
    mobileNo: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required]
  })

  /****************************************
   * editEmployeeForm
   * @purpose: this is used to edit employeed data by manager
   ****************************************/
  editEmployeeForm = this._fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    mobile: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required]
  })

  constructor(private _shared: SharedService, private _fb: FormBuilder, private _router : Router) { }

  ngOnInit(): void {
this.getEmployeeList()
    
  }


  getEmployeeList(){
    this._shared.getEmployees().subscribe(res => {
      this.profile = res;
    })
  }

  /****************************************
   * addEmployee()
   * @purpose: this is used to add new employee by manager
   ****************************************/

  addEmployee() {
    const reqData = {
      firstName: this.addEmployeeForm.value.firstName,
      lastName: this.addEmployeeForm.value.lastName,
      address: this.addEmployeeForm.value.address,
      birthDate: this.addEmployeeForm.value.dob,
      mobile: this.addEmployeeForm.value.mobileNo,
      city: this.addEmployeeForm.value.city
    }

    this._shared.addEmployee(reqData).subscribe(res => {
      this.addEmployeeForm.reset();
      $("#addEmployeeModal").modal("hide");
      this.getEmployeeList();
    })
  }

  /****************************************
   * patchCurrentEmployeeData()
   * @purpose: this is used to patch the data in edit modal
   ****************************************/

  public patchCurrentEmployeeData(data: any) {
    this.editEmployeeForm.patchValue(data)
    console.log("Hi")
  }

  /****************************************
   * editEmployee()
   * @purpose: this is used to edit the employee details
   ****************************************/

  public editEmployee() {

    const reqData = {
      firstName: this.editEmployeeForm.value.firstName,
      lastName: this.editEmployeeForm.value.lastName,
      address: this.editEmployeeForm.value.address,
      birthDate: this.editEmployeeForm.value.birthDate,
      mobile: this.editEmployeeForm.value.mobile,
      city: this.editEmployeeForm.value.city
    }
        
    this._shared.editEmployee(reqData).subscribe(val => {
      this.editEmployeeForm.reset();
      $("#editEmployeeModal").modal("hide");
      this.getEmployeeList();
    })

  }

  /****************************************
   * deleteEmployee()
   * @purpose: this is used to delete employee data by manager
   ****************************************/

public deleteEmployee(emp : any) {

  this._shared.deleteEmployee(emp).subscribe(res => {
    this.getEmployeeList();
  })
}
logOut(){
  localStorage.removeItem('userID');
  this._router.navigate(['/'])
}
}
