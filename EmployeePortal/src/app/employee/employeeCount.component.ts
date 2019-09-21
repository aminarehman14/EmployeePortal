import { Component, Input } from '@angular/core'

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeecount.component.css']
})

export class EmployeeCount {
    @Input()
    all: number;
    @Input()
    male: number;
    @Input()
    female: number; 
}