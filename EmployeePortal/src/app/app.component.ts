import { Component } from '@angular/core';


@Component({

    selector: 'my-app',
    template: `
               <button class="colorClass" [class]='classesToApply' >Button </button>
<br/>
<br/>
               <button class="colorClass" [class.boldClass]='applyBoldClass' >Button </button>
<br/>
<br/>
               <button class="colorClass" [ngClass]='addClasses()' >Button </button>

`


})



export class AppComponent {

    classesToApply: string = 'boldClass italicsClass';
    applyBoldClass: boolean = true;
    applyItalicsClass: boolean = true;

    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };
        return classes;
        }
    }
}
