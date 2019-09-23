import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeList } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCount } from './employee/employeeCount.component';
import { SimpleComponent } from './Others/simple.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeList, EmployeeTitlePipe, EmployeeCount, SimpleComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
