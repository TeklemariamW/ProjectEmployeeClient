import { Component, OnInit } from '@angular/core';
import { Project } from '../../_interfaces/project.model';
import { ProjectRepositoryService } from '../../shared/services/project-repository.service';

import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from '../../shared/services/error-handler.service';

/**
 * Represents the component responsible for displaying a list of projects.
 */
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit{
  projects: Project[]; // The list of projects to be displayed
  errorMessage: string; // The error message to be displayed, if any

  constructor(private repository: ProjectRepositoryService, private errorHandler: ErrorHandlerService){}

  /**
   * Initializes the component by calling the getAllProjects method.
   */
  ngOnInit(): void {
      this.getAllProjects();
  }

  /**
   * Retrieves all projects from the API and assigns them to the projects property.
   */
  private getAllProjects = () => {
    const apiAddress: string = 'api/project';

    this.repository.getProjects(apiAddress)
    .subscribe({
      next: (projects: Project[]) => {
        this.projects = projects;
      },
      error: (err: HttpErrorResponse) => {
        this.errorHandler.handleError(err);
        this.errorMessage = this.errorHandler.errorMessage;
      }
    })
  }
}
