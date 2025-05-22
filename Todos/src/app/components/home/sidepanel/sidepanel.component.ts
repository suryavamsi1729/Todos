import { Component } from '@angular/core';
import { LucideAngularModule , Bell,Plus,} from 'lucide-angular';
import { SidePanelHeaderComponent } from '../side-panel-header/side-panel-header.component';
import { TeamMembersCompComponent } from '../team-members-comp/team-members-comp.component';
import { CalenderComponent } from '../../ui/calender/calender.component';
import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  selector: 'SidePanel',
  imports: [LucideAngularModule,SidePanelHeaderComponent,TeamMembersCompComponent,CalenderComponent,ScheduleComponent],
  templateUrl: './sidepanel.component.html',
  styleUrl: './sidepanel.component.css'
})
export class SidepanelComponent {
  readonly BellIcon = Bell;
  readonly PlusIcon = Plus;
}
