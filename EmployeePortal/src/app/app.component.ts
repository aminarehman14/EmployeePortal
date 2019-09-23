import { Component, Input } from '@angular/core';



@Component({

    selector: 'my-app',
    template: `Your Text: <input type='text' [(ngModel)]='userText'/>
<br/><br/>
<simple [simpleInput]='userText'>

`

})



export class AppComponent {
    userText: string = 'Amina';
    }
