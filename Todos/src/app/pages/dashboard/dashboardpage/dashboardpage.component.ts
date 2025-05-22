import { Component } from '@angular/core';
import { MainpanelComponent } from '../../../components/home/mainpanel/mainpanel.component';
import { SidepanelComponent } from '../../../components/home/sidepanel/sidepanel.component';

@Component({
  selector: 'DashboardPage',
  host:{
    class:"grow h-full"
  },
  imports: [MainpanelComponent,SidepanelComponent,],
  templateUrl: './dashboardpage.component.html',
  styleUrl: './dashboardpage.component.css'
})
export class DashboardpageComponent {

}
