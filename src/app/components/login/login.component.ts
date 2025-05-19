import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userType = params['userType'];
    });
  }

  onSubmit() {
    // Aquí iría tu lógica de autenticación real
    // Por ahora solo simulamos el login exitoso
    //this.authService.login(this.userType);
    
    if (this.userType === 'cliente') {
      this.router.navigate(['/agendar']);
    } else {
      this.router.navigate(['/usuario']);
    }
  }
}
