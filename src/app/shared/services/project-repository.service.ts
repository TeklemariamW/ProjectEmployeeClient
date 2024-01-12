import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { Project } from '../../_interfaces/project.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectRepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`
  }
  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }

  public getProjects = (route: string) => {
    return this.http.get<Project[]>(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }

  public createProject =(route: string, project: Project) => {
    return this.http.post<Project>(this.createCompleteRoute(route, this.envUrl.urlAddress), project, this.generateHeaders());
  }

  public updateProject = (route: string, project: Project) => {
    return this.http.put(this.createCompleteRoute(route, this.envUrl.urlAddress), project, this.generateHeaders());
  }

  public deleteProject = (route: string) => {
    this.http.delete(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }
}
