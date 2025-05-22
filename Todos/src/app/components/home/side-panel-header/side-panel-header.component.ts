import { Component } from '@angular/core';
import { LucideAngularModule,Bell } from 'lucide-angular';

@Component({
  selector: 'sidePanelHeader',
  imports: [LucideAngularModule],
  templateUrl: './side-panel-header.component.html',
  styleUrl: './side-panel-header.component.css'
})
export class SidePanelHeaderComponent {
  readonly BellIcon = Bell;
}
