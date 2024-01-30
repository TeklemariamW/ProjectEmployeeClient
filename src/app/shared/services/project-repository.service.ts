import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { Project } from '../../_interfaces/project.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Service for interacting with the project repository.
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectRepositoryService {

  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  /**
   * Creates the complete route by combining the route and environment address.
   * @param route - The route to be appended to the environment address.
   * @param envAddress - The environment address.
   * @returns The complete route.
   */
  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`
  }

  /**
   * Generates the headers for the HTTP request.
   * @returns The headers object.
   */
  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  }

  /**
   * Retrieves the projects from the specified route.
   * @param route - The route to retrieve the projects from.
   * @returns An observable of the projects.
   */
  public getProjects = (route: string) => {
    return this.http.get<Project[]>(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }

  /**
   * Creates a new project at the specified route.
   * @param route - The route to create the project at.
   * @param project - The project to be created.
   * @returns An observable of the created project.
   */
  public createProject =(route: string, project: Project) => {
    return this.http.post<Project>(this.createCompleteRoute(route, this.envUrl.urlAddress), project, this.generateHeaders());
  }

  /**
   * Updates the project at the specified route.
   * @param route - The route to update the project at.
   * @param project - The updated project.
   * @returns An observable of the updated project.
   */
  public updateProject = (route: string, project: Project) => {
    return this.http.put(this.createCompleteRoute(route, this.envUrl.urlAddress), project, this.generateHeaders());
  }

  /**
   * Deletes the project at the specified route.
   * @param route - The route to delete the project from.
   */
  public deleteProject = (route: string) => {
    this.http.delete(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }
}
