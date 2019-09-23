import { isEmbeddedView } from "@angular/core/src/view/util";

export interface IEmployee {
    code:  string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;
    department?: string; 
}


