import { Component } from '@angular/core';
import { Employee } from '../EmployeeEntity';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-classtask',
  templateUrl: './classtask.component.html',
  styleUrl: './classtask.component.css'
})
export class ClasstaskComponent {

 emp: Employee[] = [];
  constructor(private serv:EmployeeService ) {}

  //ngOnInit(){
      //this.serv.showAllEmployee().subscribe((x) => (this.emp = x as unknown as EmployeeService[]));
      ngOnInit() {
        this.serv.showAllEmployee().subscribe(
            (employees: Employee[]) => {
                this.emp = employees;
            },
            (error) => {
                console.error('Error fetching employees:', error);
            }
        );
    }
    

 
  }
