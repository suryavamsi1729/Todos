import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../ui/search/search.component';
import { ProjectItemComponent } from '../project-item/project-item.component';
import { ProjectService } from '../../../services/project.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'projectmainpanel',
  host:{
    class:"grow h-full flex flex-col justify-start items-start p-4"
  },
  imports: [SearchComponent,ProjectItemComponent,CommonModule],
  templateUrl: './projectmainpanel.component.html',
  styleUrl: './projectmainpanel.component.css'
})
export class ProjectmainpanelComponent implements OnInit {
  projects: {"id": number,
      "name": string,
      "status": string,
      "assignedTo": string,
      "dueDate": string}[] = [];
  typeofProjects:string | undefined= undefined;
  dropDown :boolean=false;
  constructor(private projectService: ProjectService) {}
  ngOnInit() {
    this.projects = this.projectService.getFilterProjects(this.typeofProjects);
  }
  setDropDown(){
    this.dropDown=!this.dropDown;
  }
  setDropDownVal(val:string | undefined){
    this.typeofProjects=val;
    this.projects = this.projectService.getFilterProjects(this.typeofProjects);
  }
}
