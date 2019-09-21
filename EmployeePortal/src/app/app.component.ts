import { Component } from '@angular/core';


@Component({

    selector: 'my-app',
    template: `
                <div> 
                    <h1>{{getFullName()}}</h1>
                <img src ='imagePath'/>    
                <my-employee></my-employee>
                </div>
            `


})



export class AppComponent {

    pageHeader: string = null;

    firstName: string = 'Amina';
    lastName: string = 'Rehman';

    getFullName(): string {

        return this.firstName + ' ' +this.lastName
    }
}
