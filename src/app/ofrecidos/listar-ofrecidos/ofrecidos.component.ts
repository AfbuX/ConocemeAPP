import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from '../../models/cita';
import Swal from 'sweetalert2';
import { citaService } from '../../service/cita.service';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-ofrecidos',
  standalone: false,
  templateUrl: './ofrecidos.component.html',
  styleUrl: './ofrecidos.component.css'
})
export class ListarOfrecidosComponent {
  @ViewChild("MiModall") modal: ElementRef | undefined;

  cita: Cita = { nombre: '', fecha: new Date(), id: 0, servicio: '' };
  vectorCitas: Cita[] = [];
  isLoading = true;


  constructor(private _citaservice: citaService, private _util: UtilityService) {
    this.loadcita();
  }

  loadcita() {
    this.isLoading = true;
    this._citaservice.getCita()
      .subscribe((rs) => {
        this.vectorCitas = rs;
        this.isLoading = false;
      });
  }


  NuevaCita() {
    this._util.AbrirModal(this.modal);
    this.cita = { id: 0, nombre: "", fecha: new Date(), servicio: "" };
  }

  guardarcita() {
    this._citaservice.postCita(this.cita!)
      .subscribe({
        next: () => {
          this._util.CerrarModal(this.modal);
          Swal.fire({ title: 'Cita creada exitosamente', icon: 'success' });
        },
        error: (err) => {
          console.error(err);
          Swal.fire({ title: 'Ha ouccurido un error inesperado', icon: 'error' });
        }
      });

  }

}



