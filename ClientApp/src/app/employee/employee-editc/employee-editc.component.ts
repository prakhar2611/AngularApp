import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/Services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-editc',
  templateUrl: './employee-editc.component.html',
  styleUrls: ['./employee-editc.component.css']
})
export class EmployeeEditcComponent implements OnInit {
  employeeaddform: FormGroup
  

  ngOnInit() {
    this.employeeaddform = this.fb.group({
      name: [''],
      gender: [''],
      city: [''],
      department: ['']
    })
  }
  constructor(public fb: FormBuilder, private router: Router, public crudService: EmployeeService) { }
  submitForm() {
    this.crudService.create(this.employeeaddform.value).subscribe(res => {
      console.log('Employee is created successfully');
    })
  }
}
