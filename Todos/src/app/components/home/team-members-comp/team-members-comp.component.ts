import { Component } from '@angular/core';
import { LucideAngularModule,Plus } from 'lucide-angular';

@Component({
  selector: 'teamMembersComp',
  imports: [LucideAngularModule],
  templateUrl: './team-members-comp.component.html',
  styleUrl: './team-members-comp.component.css'
})
export class TeamMembersCompComponent {
  readonly PlusIcon = Plus;
}
