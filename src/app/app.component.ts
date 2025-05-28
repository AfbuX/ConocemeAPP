import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'conocemeAPP';
  hideHeaderFooter = false;
  constructor(private router: Router) {} 

  isLoguinRoute(): boolean{
    return this.router.url === '/' || this.router.url.startsWith('/login');
  }
  // constructor(private router: Router) {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       const url = event.urlAfterRedirects;
  //       this.hideHeaderFooter = url === '/' || url.startsWith('/login');
  //     }
  //   });
  // }
}
