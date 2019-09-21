﻿import { Component } from '@angular/core';

@Component({

    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html'

})


export class EmployeeComponent {
    firstName: string = 'John';
    lastName: string = 'Smith';
    gender: string = 'Male';
    dob: string = '04141976';


}