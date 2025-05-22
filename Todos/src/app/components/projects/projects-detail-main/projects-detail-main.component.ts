import { Component } from '@angular/core';
import { SearchComponent } from '../../ui/search/search.component';
import { LucideAngularModule, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'projectsDetailMain',
  host:{
    class:'grow h-full flex flex-col justify-start items-start'
  },
  imports: [SearchComponent,LucideAngularModule],
  templateUrl: './projects-detail-main.component.html',
  styleUrl: './projects-detail-main.component.css'
})
export class ProjectsDetailMainComponent {
  readonly inc = TrendingUp;
  dash=100;
}
