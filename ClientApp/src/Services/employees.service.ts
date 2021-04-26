import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject,Inject } from "@angular/core";
import { Observable } from "rxjs";


export class EmployeeService {
  appurl: string = "";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application /json'
    })
  }

  constructor(private httpobj: HttpClient, @Inject('BASE_URL') _baseurl: string) {
    this.appurl = _baseurl;

  }

  getallEmployees(): Observable<EmployeeDataModel> {
    return this.httpobj.get<EmployeeDataModel>(this.appurl + "api/Employee/Index");
  }
  create(employee): Observable<EmployeeDataModel> {
    return this.httpobj.post<EmployeeDataModel>(this.appurl + "api/Employee/NewEmployee", JSON.stringify(employee), this.httpOptions).pipe()
  }
 /* update(employee): Observable<EmployeeDataModel> {
    return this.httpobj.post<EmployeeDataModel>(this.appurl + "api/Employee/NewEmployee", JSON.stringify(employee), this.httpOptions).pipe()
  }
  deleteEmployee(id): Observable<void> {
    return this.httpobj.delete<void>(this.appurl + "api/Employee/DeleteEmployee");
  }*/


  deleteEmployee(id): Observable<EmployeeDataModel> {
    return this.httpobj.delete<EmployeeDataModel>(this.appurl + "api/Employee/Delete/" + id);
      
  }

  getEmployeeById(id: number): Observable<EmployeeDataModel> {
    return this.httpobj.get<EmployeeDataModel>(this.appurl + "api/Employee/Details/" + id)
     
  }

  updateEmployee(employee): Observable<EmployeeDataModel>{
    return this.httpobj.put<EmployeeDataModel>(this.appurl + 'api/Employee/Edit', employee)
     
  }  
}




export class EmployeeDataModel {
  empid: number;
  name: string;
  gender: string;
  city: string;
  department: string;
}
