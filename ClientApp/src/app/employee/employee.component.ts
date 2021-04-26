import { Component, OnInit } from '@angular/core';
import { EmployeeDataModel, EmployeeService } from 'src/Services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public emplist: EmployeeDataModel;

  constructor(private serviceEmployee: EmployeeService) {
    this.getAllEmployee();
  }

  ngOnInit() {
  }

  getAllEmployee() {
    this.serviceEmployee.getallEmployees().subscribe(data => this.emplist = data)
  }

 delete(employeeID) {  
       
   this.serviceEmployee.deleteEmployee(employeeID).subscribe((data) => {  
     this.getAllEmployee();  
             
        } ) 
    } 

}
