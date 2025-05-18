import { Component, Input, input } from '@angular/core';
import { Usuario } from '../../models/usuario';
import {format} from 'date-fns-tz';

@Component({
  selector: 'app-cu-usuario',
  standalone: false,
  templateUrl: './cu-usuario.component.html',
  styleUrl: './cu-usuario.component.css'
})
export class CuUsuarioComponent {
  @Input() usuario: Usuario | undefined;
@Input() roll: Usuario | undefined;
@Input() email: Usuario | undefined;
@Input() password: Usuario | undefined;

  formatDateTimeLocal(fecha: Date)
  {
    let fechaFormateada = format(fecha, "yyyy-mm-dd' T 'HH:mm",{timeZone:"America/Bogota"});
    return fechaFormateada;
  }
  updateDate(valor:string){
    this.usuario!.fecha = new Date (valor);
    
  }
}
