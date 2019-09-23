import { Component, Input, Output, EventEmitter } from '@angular/core'

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

    selectedRadioButtonValue: string ='All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();




    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    }
}