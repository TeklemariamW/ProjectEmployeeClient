import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../_interfaces/employee.model';
import { EnvironmentUrlService } from './environment-url.service';

/**
 * Service for interacting with the employee repository.
 */
@Injectable({
  providedIn: 'root'
})
export class EmployeeRepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  /**
   * Creates the complete route by combining the route and environment address.
   * @param route - The route to be appended to the environment address.
   * @param envAddress - The environment address.
   * @returns The complete route.
   */
  private createCompleteRoute = (route: string, envAddress: string) =>
  {
    return `${envAddress}/${route}`
  }

  /**
   * Generates the header for HTTP requests.
   * @returns The header object.
   */
  private generateHeader = () =>
  {
    return {
      headers: new HttpHeaders ({'Content-Type':'application/json'})
    }
  }

  /**
   * Retrieves the list of employees from the specified route.
   * @param route - The route to fetch the employees from.
   * @returns An observable of the list of employees.
   */
  public getEmployees = (route: string) =>
  {
    return this.http.get<Employee[]>(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }

  /**
   * Creates a new employee using the specified route and employee object.
   * @param route - The route to create the employee.
   * @param employee - The employee object to be created.
   * @returns An observable of the created employee.
   */
  public createEmployee = (route: string, employee: Employee) =>
  {
    return this.http.post<Employee>(this.createCompleteRoute(route, this.envUrl.urlAddress), employee, this.generateHeader());
  }

  /**
   * Updates an existing employee using the specified route and employee object.
   * @param route - The route to update the employee.
   * @param employee - The employee object to be updated.
   * @returns An observable of the updated employee.
   */
  public updateEmployee = (route: string, employee: Employee) =>
  {
    return this.http.put(this.createCompleteRoute(route, this.envUrl.urlAddress), employee, this.generateHeader())
  }

  /**
   * Deletes an employee using the specified route.
   * @param route - The route to delete the employee.
   */
  public deleteEmployee = (route: string) =>
  {
    this.http.delete(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }
}
