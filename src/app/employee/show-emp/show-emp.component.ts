import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit{
  constructor(private service:SharedService) {}

  AllEmployees:any=[];
  ModalTitle: string | undefined;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  dataItem:any;


  ngOnInit(): void {
    this.refreshAllEmployees();
  }
  refreshAllEmployees() {
    throw new Error('Method not implemented.');
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      FirstName:"",
      LastName:"",
      Designation:"",
      DateOfJoining:"",
      ReportingManagerEmployeeId:"",
      Gender:"",
      EmployeeAddress:"",
      State:"",
      Country:"",
      Pincode:"",
      DepartmentId:"",
      IsActive:""
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }

  editClick(item: any){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item: any){
    if(confirm("Are you sure??")){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshAllEmployees();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshAllEmployees();
  }

  refreshAllDepartments(){
    this.service.getAllDepartments().subscribe(data=>{
      this.AllEmployees=data;
    });
  }
}
