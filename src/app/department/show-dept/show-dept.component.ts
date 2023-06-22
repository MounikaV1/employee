import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dept',
  templateUrl: './show-dept.component.html',
  styleUrls: ['./show-dept.component.css']
})
export class ShowDeptComponent implements OnInit{

  constructor(private service:SharedService) {}

  AllDepartments:any=[];
  ModalTitle: string | undefined;
  ActivateAddEditDeptComp:boolean=false;
  dept:any;
  dataItem:any;

  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  AllDepartmentsWithoutFilter:any=[];


  ngOnInit(): void {
    this.refreshAllDepartments();
  }

  addClick(){
    this.dept={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDeptComp=true;
  }

  editClick(item: any){
    this.dept=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditDeptComp=true;
  }

  deleteClick(item: any){
    if(confirm("Are you sure??")){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshAllDepartments();
      });
    }
  }

  closeClick(){
    this.ActivateAddEditDeptComp=false;
    this.refreshAllDepartments();
  }

  refreshAllDepartments(){
    this.service.getAllDepartments().subscribe(data=>{
      this.AllDepartments=data;
    });
  }

  // FilterFn(){
  //   var DepartmentIdFilter =this.DepartmentIdFilter;
  //   var DepartmentNameFilter=this.DepartmentNameFilter;

  //   this.AllDepartments = this.AllDepartmentsWithoutFilter.filter(function (e1){
  //     return e1.DepartmentId.toString().toLowerCase().include(
  //       DepartmentIdFilter.toString().trim().toLowerCase()
  //     )&&
  //     e1.DepartmentName.toString().toLowerCase().includes(
  //       DepartmentIdFilter.toString().trim().toLowerCase()
  //     )
  //   });
  // }
}

