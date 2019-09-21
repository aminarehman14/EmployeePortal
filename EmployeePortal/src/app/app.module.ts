import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeList } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeList, EmployeeTitlePipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
