import { Component } from '@angular/core';
import { RemarksComponent } from '../remarks/remarks.component';
import { Check, LucideAngularModule, Plus } from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'projectsDetailSide',
  host: {
    class: 'w-auto h-full flex flex-col justify-start items-start '
  },
  imports: [RemarksComponent,LucideAngularModule,CommonModule],
  templateUrl: './projects-detail-side.component.html',
  styleUrl: './projects-detail-side.component.css'
})
export class ProjectsDetailSideComponent {
  readonly PlusIcon = Plus;
  readonly tick = Check;
  messages = [
    {
      "id": 1,
      "time": "2025-04-11T11:00:00",
      "status": "Completed",
      "title": "Authentication Setup",
      "description": "Finish implementing user login and signup",
      "dueDate": "2025-04-11",
      "progress":100,
    },
    {
      "id": 2,
      "time": "2025-04-08T10:00:00",
      "status": "Completed",
      "title": "Design Finalization",
      "description": "Complete the final design screens in Figma",
      "dueDate": "2025-04-09",
      "progress":100,
    },
    {
      "id": 3,
      "time": "2025-04-12T14:00:00",
      "status": "Completed",
      "title": "Notification System",
      "description": "Set up Firebase for push notifications",
      "dueDate": "2025-04-14",
      "progress":100,
    },
    {
      "id": 4,
      "time": "2025-04-09T15:00:00",
      "status": "In Progress",
      "title": "API Integration",
      "description": "Start integrating backend APIs with frontend",
      "dueDate": "2025-04-11",
      "progress":90,
    },
    {
      "id": 5,
      "time": "2025-04-14T09:30:00",
      "status": "Pending",
      "title": "Testing & QA",
      "description": "Perform functional and UI testing",
      "dueDate": "2025-04-16",
      "progress":0,
    },
    {
      "id": 6,
      "time": "2025-04-16T17:00:00",
      "status": "Pending",
      "title": "Final Deployment",
      "description": "Deploy the application to production",
      "dueDate": "2025-04-17",
      "progress":0,
    }
  ];
}
