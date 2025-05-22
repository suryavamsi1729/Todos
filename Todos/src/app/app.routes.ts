import { Routes } from '@angular/router';
import { DashboardpageComponent } from './pages/dashboard/dashboardpage/dashboardpage.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectmainpanelComponent } from './components/projects/projectmainpanel/projectmainpanel.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

export const routes: Routes = [
    {path:"",component:DashboardpageComponent},
    {
        path:"project",
        component:ProjectsComponent,
        children:[
            {
                path:"",
                component:ProjectmainpanelComponent
            },
            {
                path:":id",
                component:ProjectDetailsComponent
            }
        ]
    },
    {path:"**",component:ErrorPageComponent}
    
];
