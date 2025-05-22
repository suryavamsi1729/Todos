import { Component } from '@angular/core';
import { ProjectsDetailMainComponent } from '../../components/projects/projects-detail-main/projects-detail-main.component';
import { ProjectsDetailSideComponent } from '../../components/projects/projects-detail-side/projects-detail-side.component';

@Component({
  selector: 'app-project-details',
  host:{
    class:'grow h-full flex flex-row justify-start items-start'
  },
  imports: [ProjectsDetailMainComponent,ProjectsDetailSideComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {

}
