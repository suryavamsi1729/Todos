import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'projectsItem',
  imports: [CommonModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css',
})
export class ProjectItemComponent {
  constructor(private router:Router){}
  @Input() type?:string;
  @Input() project?:{"id": number,
    "name": string,
    "status": string,
    "assignedTo": string,
    "dueDate": string};

  navigateFunction(){
    
    if(this.project?.id){
      this.router.navigate([`/project/${this.project?.id}`]);
    }
  }
}
