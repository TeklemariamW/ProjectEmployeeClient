import { Component, OnInit } from '@angular/core';

import { Employee } from '../../_interfaces/employee.model';
import { EmployeeRepositoryService } from '../../shared/services/employee-repository.service';
import { ErrorHandlerService } from '../../shared/services/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[];
  errorMessage: string;
  

  constructor(private repository: EmployeeRepositoryService, private errorHandler: ErrorHandlerService){}

  ngOnInit(): void {
      this.getEmployees();
  }

  private getEmployees = () => 
  {
    const apiAddress: string = 'api/employee';
    this.repository.getEmployees(apiAddress)
    .subscribe({
      next: (emp: Employee[]) => this.employees = emp,
      error: (err: HttpErrorResponse) => {
        this.errorHandler.handleError(err)
        this.errorMessage = this.errorHandler.errorMessage;
      }
    })
  }
}
