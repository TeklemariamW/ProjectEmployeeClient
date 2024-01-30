import { Component, OnInit } from '@angular/core';

import { Employee } from '../../_interfaces/employee.model';
import { EmployeeRepositoryService } from '../../shared/services/employee-repository.service';
import { ErrorHandlerService } from '../../shared/services/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Represents the Employee List Component.
 */
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[];
  errorMessage: string;
  

  constructor(private repository: EmployeeRepositoryService, private errorHandler: ErrorHandlerService){}

  /**
   * Initializes the component and retrieves the list of employees.
   */
  ngOnInit(): void {
      this.getEmployees();
  }

  /**
   * Retrieves the list of employees from the API.
   */
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
