import { Component, OnInit } from '@angular/core';
import { Project } from '../../_interfaces/project.model';
import { ProjectRepositoryService } from '../../shared/services/project-repository.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit{
  projects: Project[];

  constructor(private repository: ProjectRepositoryService){}

  ngOnInit(): void {
      this.getAllProjects();
  }

  private getAllProjects = () => {
    const apiAddress: string = 'api/project';

    this.repository.getProjects(apiAddress)
    .subscribe(pro => {
      this.projects = pro;
    })
  }
}
