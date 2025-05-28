import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideHeader = false;
  constructor(private router: Router) {
    let dev = localStorage.getItem("us")
    this.hideHeader = dev == "cliente" ? false : true;
  }

}
