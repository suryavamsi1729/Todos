import { Component } from '@angular/core';
import { SearchComponent } from '../../ui/search/search.component';
import { ContainerComponent } from '../../ui/container/container.component';
import { LucideAngularModule, CirclePlus } from 'lucide-angular';
import { CheckboxComponent } from '../../ui/checkbox/checkbox.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  standalone: true,
  selector: 'MainPanel',
  imports: [SearchComponent,ContainerComponent,CheckboxComponent,LucideAngularModule],
  templateUrl: './mainpanel.component.html',
  styleUrl: './mainpanel.component.css',
  
})
export class MainpanelComponent {
  dash = 200;
  dashtwo = 80;
  readonly addIcon = CirclePlus;
 
}
