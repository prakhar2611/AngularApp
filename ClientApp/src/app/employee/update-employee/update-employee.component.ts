import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/Services/employees.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeform: FormGroup
  employeeId: number;
 
  constructor(private fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _employeeService: EmployeeService, private _router: Router) {
    if (this._avRoute.snapshot.params["id"]) {
      this.employeeId = this._avRoute.snapshot.params["id"];
    }
    this.employeeform = this.fb.group({
      employeeId: 0,
      name: [''],
      gender: [''],
      department: [''],
      city: ['']
    })
  }

  ngOnInit() {
    if (this.employeeId > 0) {
      
      this._employeeService.getEmployeeById(this.employeeId)
        .subscribe(resp => this.employeeform.setValue(resp))
         
    }  
  }

  

  save() {
   
      this._employeeService.updateEmployee(this.employeeform.value)
        .subscribe((data) => {
          this._router.navigate(['/employee-data']);
        })
    }
  

  cancel() {
    this._router.navigate(['/employee-data']);
  }  

}
