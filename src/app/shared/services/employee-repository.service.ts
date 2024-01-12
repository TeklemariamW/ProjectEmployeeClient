import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../_interfaces/employee.model';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeRepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  private createCompleteRoute = (route: string,envAddress: string ) =>
  {
    return `${envAddress}/${route}`
  }

  private generateHeader = () =>
  {
    return{
    headers: new HttpHeaders ({'Content-Type':'application/json'})
    }
  }

  public getEmployees = (route: string) =>
  {
   return this.http.get<Employee[]>(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }

  public createEmployee = (route: string, employee: Employee) =>
  {
    return this.http.post<Employee>(this.createCompleteRoute(route, this.envUrl.urlAddress), employee, this.generateHeader());
  }

  public updateEmployee = (route: string, employee: Employee) =>
  {
    return this.http.put(this.createCompleteRoute(route, this.envUrl.urlAddress), employee, this.generateHeader())
  }

  public deleteEmployee = (route: string) =>
  {
    this.http.delete(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }
}
