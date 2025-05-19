import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userType: string = '';
  email: string = '';
  password: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userType = params['userType'] || 'cliente';
    });
  }

  onSubmit() {
    
    console.log('Tipo de usuario:', this.userType);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
