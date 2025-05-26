import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilityService } from '../../services/utility.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  userType: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private _utilServie: UtilityService, 
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.route.params.subscribe((params: { [key: string]: string }) => {
      this.userType = params['userType'];
    });
  }

  loguin() {
    this._utilServie.Login(this.email, this.password)
    .subscribe(rs => {
      if(rs){
        this.router.navigate(['/'])
      }else{
        Swal.fire({
          title: 'Usuario y/o contraseña incorrecta',
          icon: 'error'
        })
      }
    })
    
    // if (this.userType === 'cliente') {
    //   this.router.navigate(['/ofrecidos']);
    // } else {
    //   this.router.navigate(['/usuario']);
    // }
  }
}
