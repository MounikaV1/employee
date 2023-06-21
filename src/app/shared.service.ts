import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:53535/api";

  constructor(private http:HttpClient) { }

  getAllDepartments():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department');
  }
  getDepartmentById():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department/id');
  }
  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }
  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'Department',val);
  }
  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }

  getAllEmployees():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }
  getEmployeeById():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee/id');
  }
  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }
  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'Employee',val);
  }
  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }


}
