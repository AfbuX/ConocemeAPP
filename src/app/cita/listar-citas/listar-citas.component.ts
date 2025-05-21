import { Component, ElementRef, ViewChild } from '@angular/core';
import { Cita } from '../../models/cita';
import { Modal } from 'bootstrap';
import { hide } from '@popperjs/core';
import Swal from 'sweetalert2';
import { citaService } from '../../service/cita.service';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-listar-cita',
  standalone: false,
  templateUrl: './listar-citas.component.html',
  styleUrl: './listar-citas.component.css'
})
export class ListarCitaComponent {

  @ViewChild("MiModall") modal: ElementRef | undefined;

  vectorCitas: Cita[] = [];

  isNew: boolean = false;
  isLoading = true;
  citaSeleccionada: Cita | undefined = undefined;

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
 

  cambiarCita(cts: Cita) {
    this._util.AbrirModal(this.modal);
    this.isNew = false;
    this.citaSeleccionada = cts;


  }

  NuevaCita() {
    this._util.AbrirModal(this.modal);
    this.isNew = true;
    this.citaSeleccionada = { id: 0, nombre: "", fecha: new Date(), servicio: "" };
    

  }

  guardarcita() {
    if (this.isNew) {
          this._citaservice.postCita(this.citaSeleccionada!)
            .subscribe({
              next: () => {
                this.citaSeleccionada = undefined;
                this._util.CerrarModal(this.modal);
                Swal.fire({ title: 'Cita creada exitosamente', icon: 'success' });
              },
              error: (err) => {
                console.error(err);
                Swal.fire({ title: 'Ha ouccurido un error inesperado', icon: 'error' });
              }
            });
        } else {
           this._citaservice.putCita(this.citaSeleccionada!)
            .subscribe({
              next: () => {
                this.citaSeleccionada = undefined;
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

  EliminarCita(us: Cita) {
    Swal.fire({
       icon: 'question',
       title: `¿Está seguro de eliminar el usuario: ${us.nombre}?`,
       showCancelButton: true,
       confirmButtonText: 'Sí, Confirmar',
       cancelButtonText: 'No, Cancelar',
       allowOutsideClick: false,
       buttonsStyling: false,
       reverseButtons: true,
       customClass: {
         cancelButton: 'btn btn-secondary',
         confirmButton: 'btn btn-danger',
       }
     }).then(rs => {
       if (rs.isConfirmed) {
         this._citaservice.deleteCita(us.id)
           .subscribe({
             next: () => {
               this.vectorCitas = this.vectorCitas.filter(u => u.id !== us.id); 
               Swal.fire({ title: 'Cita Eliminada Correctamente', icon: 'success' });
             },
             error: (err) => {
               console.error(err);
               Swal.fire({ title: 'Error al eliminar usuario', icon: 'error' });
             }
           });
       }
     });
  }


  
}
