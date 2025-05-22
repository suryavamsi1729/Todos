import { Component } from '@angular/core';
import { DashboardpageComponent } from './pages/dashboard/dashboardpage/dashboardpage.component';
import { MainlayoutComponent } from './components/layouts/mainlayout/mainlayout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainlayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todos';
}
