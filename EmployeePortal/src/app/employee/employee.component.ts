import { Component } from '@angular/core';

@Component({

    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})


export class EmployeeComponent {
    columnSpan: number = 2;
    firstName: string = 'John';
    lastName: string = 'Smith';
    gender: string = 'Male';
    dob: string = '04/14/1976';
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;

    }


}