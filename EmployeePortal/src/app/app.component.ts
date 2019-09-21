import { Component } from '@angular/core';



@Component({

    selector: 'my-app',
    template: `
<list-employee></list-employee>
`
})



export class AppComponent {
    name: string = 'Tom';


    onClick(): void {

    console.log("button click")}
    
    }
