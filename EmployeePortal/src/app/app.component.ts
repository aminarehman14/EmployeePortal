import { Component } from '@angular/core';


@Component({

    selector: 'my-app',
    template: `
                <div> 
                    <my-employee></my-employee>
                </div>
            `


})



export class AppComponent {

    pageHeader: string = 'Employee Details';
    imagePath: string = 'https://i.pinimg.com/originals/7c/51/98/7c5198d2a0751fa76c8433dba4a1a12a.jpg';
    firstName: string = 'Amina';
    lastName: string = 'Rehman';
    isDisabled: boolean = false;


    getFullName(): string {

        return this.firstName + ' ' + this.lastName
    }
}
