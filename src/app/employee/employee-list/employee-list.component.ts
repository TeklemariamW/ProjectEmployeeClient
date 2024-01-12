import { Component, OnInit } from '@angular/core';

import { Employee } from '../../_interfaces/employee.model';
import { EmployeeRepositoryService } from '../../shared/services/employee-repository.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[];

  constructor(private repository: EmployeeRepositoryService){}

  ngOnInit(): void {
      this.getEmployees();
  }

  private getEmployees = () => 
  {
    const apiAddress: string = 'api/employee';
    this.repository.getEmployees(apiAddress)
    .subscribe(emp => {
      this.employees = emp
    })
  }
}
