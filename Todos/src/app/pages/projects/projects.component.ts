import { Component } from '@angular/core';
import { ProjectmainpanelComponent } from "../../components/projects/projectmainpanel/projectmainpanel.component";
import { Route } from 'lucide-angular';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'projectsPage',
  host:{
    class:"grow h-full"
  },
  imports: [RouterOutlet],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  
}
