import { Component } from '@angular/core'

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeecount.component.css']
})

export class EmployeeCount {
    all: number=10;
    male: number = 5;
    female: number = 5;
}