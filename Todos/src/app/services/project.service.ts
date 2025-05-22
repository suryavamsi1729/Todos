import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects =  [
    {
      "id": 1,
      "name": "Website Redesign",
      "status": "Completed",
      "assignedTo": "Alice Johnson",
      "dueDate": "2024-03-15"
    },
    {
      "id": 2,
      "name": "Mobile App UI/UX",
      "status": "In Progress",
      "assignedTo": "David Smith",
      "dueDate": "2024-04-10"
    },
    {
      "id": 3,
      "name": "E-commerce Backend",
      "status": "In Progress",
      "assignedTo": "Emily Davis",
      "dueDate": "2024-04-20"
    },
    {
      "id": 4,
      "name": "Marketing Landing Page",
      "status": "Assigned",
      "assignedTo": "Michael Brown",
      "dueDate": "2024-05-05"
    },
    {
      "id": 5,
      "name": "Product Dashboard",
      "status": "Completed",
      "assignedTo": "Sophia Wilson",
      "dueDate": "2024-02-28"
    },
    {
      "id": 6,
      "name": "CRM System Update",
      "status": "In Progress",
      "assignedTo": "Olivia Martinez",
      "dueDate": "2024-04-30"
    },
    {
      "id": 7,
      "name": "Customer Support Bot",
      "status": "Completed",
      "assignedTo": "Daniel Garcia",
      "dueDate": "2024-03-01"
    },
    {
      "id": 8,
      "name": "AI Recommendation System",
      "status": "In Progress",
      "assignedTo": "James Taylor",
      "dueDate": "2024-05-15"
    },
    {
      "id": 9,
      "name": "Team Collaboration Tool",
      "status": "Assigned",
      "assignedTo": "Charlotte Lee",
      "dueDate": "2024-06-01"
    },
    {
      "id": 10,
      "name": "Data Analytics Dashboard",
      "status": "Completed",
      "assignedTo": "Henry Walker",
      "dueDate": "2024-03-20"
    },
    {
      "id": 11,
      "name": "Social Media Automation",
      "status": "In Progress",
      "assignedTo": "Ethan Robinson",
      "dueDate": "2024-04-25"
    },
    {
      "id": 12,
      "name": "Task Management App",
      "status": "Completed",
      "assignedTo": "Amelia White",
      "dueDate": "2024-02-15"
    }
  ];
  constructor() { }
  getProjects() {
    return this.projects;
  }
  getFilterProjects(filter?:string){
    return this.projects.filter((project)=>{
      return !filter || project.status==filter;
    })
  }
}
