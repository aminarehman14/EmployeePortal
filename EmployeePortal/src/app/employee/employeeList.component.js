"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var EmployeeList = (function () {
    function EmployeeList() {
        this.selectedEmployeeCountRadioButton = 'All';
        this.employees = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '5/26/1988'
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '10/14/1980'
            },
            {
                code: 'emp105', name: 'Nancy', gender: 'Female',
                annualSalary: 6200.826, dateOfBirth: '12/10/1970'
            },
        ];
    }
    EmployeeList.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeList.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeList.prototype.getTotalMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeList.prototype.getTotalFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    return EmployeeList;
}());
EmployeeList = __decorate([
    core_1.Component({
        selector: 'list-employee',
        templateUrl: 'app/employee/employeeList.component.html',
        styleUrls: ['app/employee/employeeList.component.css']
    }),
    __metadata("design:paramtypes", [])
], EmployeeList);
exports.EmployeeList = EmployeeList;
//# sourceMappingURL=employeeList.component.js.map