import {Component} from '@angular/core';
import {EmpDetails} from './Models/empDetails';
import {MyserviceService} from './Services/myservice.service';


@Component({
    selector:'employee-root',
    templateUrl:'./Views/employee-app.component.html',
})

export class EmployeeComponent{

    //two way binding
    currentEmployee:EmpDetails = new EmpDetails();

    //Employee list
    empList :Array<MyserviceService> = new Array<MyserviceService>();

    constructor(private _serviceList:MyserviceService){
    }

    ngOnInit(){
        this.empList = this._serviceList.getEmp();
    }

    AddEmployee(){
        this._serviceList.addEmpList(this.currentEmployee);
        this.currentEmployee = new EmpDetails();
    }
  
    
}