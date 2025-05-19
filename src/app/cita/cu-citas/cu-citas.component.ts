import { Component, Input} from '@angular/core';
import { Cita } from '../../models/cita';
import { format } from 'date-fns-tz';
@Component({
  selector: 'app-cu-citas',
  standalone: false,
  templateUrl: './cu-citas.component.html',
  styleUrl: './cu-citas.component.css'
})
export class CuCitasComponent {
@Input() citica : Cita  | undefined;


formatearFechita(fecha:Date){
let fechaformateada = format(fecha,"yyyy-MM-dd'T'HH:mm", {timeZone:"America/Bogota"});
return fechaformateada;
}


actualizarFecha(cadena:string){
  this.citica!.fecha= new Date(cadena);
}
}

