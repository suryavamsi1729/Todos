import { NgClass,Location } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LucideAngularModule, LayoutDashboard, ChartNoAxesColumnIncreasing,UserRound, MessageCircleMore,Settings,CircleHelp,LogOut } from 'lucide-angular';
import { filter } from 'rxjs/operators';
@Component({
  standalone: true,
  selector: 'SideNavbar',
  imports: [LucideAngularModule,NgClass],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.css'
})
export class SidenavbarComponent implements OnInit {
  currentActiveNavEle = "Dashboard";
  constructor(private router:Router,private location:Location){
  }
  ngOnInit(): void {
    this.updateActiveNav();
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateActiveNav();
      });
    
  }

  navItems = [
    { name: 'Dashboard', route: '/', icon: LayoutDashboard },
    { name: 'Projects', route: '/project', icon: ChartNoAxesColumnIncreasing },
    { name: 'Team Members', route: '/team', icon: UserRound },
    { name: 'Message', route: '/message', icon: MessageCircleMore },
    { name: 'Settings', route: '/settings', icon: Settings },
  ];
  bottomNavItems = [
    { name: 'Help', route: '/help', icon: CircleHelp },
    { name: 'Logout', route: '/logout', icon: LogOut }
  ];

  private updateActiveNav(): void {
    const path = "/"+this.location.path().split('/')[1] || 'Dashboard';
    this.navItems.forEach(item => {
      if (
        item.route === this.location.path() ||
        item.route === path
      ) {
        this.currentActiveNavEle = item.name;
      }
    });
  }
  setActiveNavEle(name: string,nav:string) {
    this.router.navigate([nav]);
    this.currentActiveNavEle = name;
  }
}
