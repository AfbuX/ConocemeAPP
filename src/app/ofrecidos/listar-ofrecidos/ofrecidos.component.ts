import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from '../../models/cita';

@Component({
  selector: 'app-ofrecidos',
  standalone: false,
  templateUrl: './ofrecidos.component.html',
  styleUrl: './ofrecidos.component.css'
})
export class ListarOfrecidosComponent {

  cita: Cita = { fecha: new Date(), id: 0, nombre: '', servicio: '' };

  NuevaCita() {

  }
  GuardarCambios() {

  }

}



