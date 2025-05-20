import { Component, ElementRef, ViewChild } from '@angular/core';
import { Cita } from '../../models/cita';
import { Modal } from 'bootstrap';
import { hide } from '@popperjs/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-cita',
  standalone: false,
  templateUrl: './listar-citas.component.html',
  styleUrl: './listar-citas.component.css'
})
export class ListarCitaComponent {

  @ViewChild("MiModall") modal: ElementRef | undefined;

  vectorCitas: Cita[] = [
    {
      id: 1, nombre: "Juan Manuel", fecha: new Date(), servicio: "Planchado"
    },
    {
      id: 2, nombre: "Pepito Perez", fecha: new Date(), servicio: "Planchado"
    },
    {
      id: 3, nombre: "Anny Sofia", fecha: new Date(), servicio: "Corte"
    },
    {
      id: 4, nombre: "Andres", fecha: new Date(), servicio: "Planchado"
    },
    {
      id: 5, nombre: "Miguel", fecha: new Date(), servicio: "Tinte"
    },
    {
      id: 6, nombre: "Parcero", fecha: new Date(), servicio: "Planchado"
    },
    {
      id: 7, nombre: "Vecino", fecha: new Date(), servicio: "Corte"
    },
    {
      id: 8, nombre: "Otro Parcero", fecha: new Date(), servicio: "Planchado"
    }

  ];

  isNew: boolean = false;

  citaSeleccionada: Cita | undefined = undefined;

  cambiarCita(cts: Cita) {
    this.isNew = false;
    this.citaSeleccionada = cts;
  this.CerrarModal(this.modal)          // modificado


  }

  NuevaCita() {
    this.isNew = true;
    this.citaSeleccionada = { id: 0, nombre: "", fecha: new Date(), servicio: "" };
    this.CerrarModal(this.modal)          // modificado

  }

  GuardarCambios() {
    if (this.isNew) {
      this.vectorCitas.push(this.citaSeleccionada!);
      this.citaSeleccionada = undefined;
      this.CerrarModal(this.modal)
    }
    else {
      this.citaSeleccionada = undefined;
      this.CerrarModal(this.modal)
    }
    Swal.fire({
      title: 'Cambios guardados correctamente',
      icon: 'success'
    });
  }

  // CerrarModal(modal: ElementRef | undefined) {
  //   if (modal) {
  //     let bsModal = Modal.getInstance(modal?.nativeElement);
  //     bsModal?.hide();

  //     let backdrop = document.querySelector(".modal-backdrop.fade.show");
  //     if (backdrop) {
  //       backdrop.parentNode?.removeChild(backdrop);
  //     }

  //     document.body.removeAttribute('style');
  //     document.body.removeAttribute('class');
  //   }
  // }

  EliminarCita(cita: Cita) {
    Swal.fire(
      {
        icon: 'question',
        title: "Quieres Eliminar tu cita ?",
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, Confirmar",
        allowOutsideClick: false,
        reverseButtons: true,

      }
    )
      .then((rs) => {
        if (rs.isConfirmed) {
          // Llamada API DELETE

          Swal.fire({
            title: 'Cita eliminada correctamente',
            icon: 'success'
          });
        }
      });
  }


  // PARA QUITAR TELITA NEGRA
  CerrarModal(modal: ElementRef | undefined) {
    if (modal) {
      let bsModal = Modal.getInstance(modal?.nativeElement)
      bsModal?.hide();

      let backdrop = document.querySelector(".modal-backdrop.fade.show")
      if (backdrop) {
        backdrop.parentNode?.removeChild(backdrop);
      }
      document.body.removeAttribute('style');
      document.body.removeAttribute('class');
    }

  }
}
