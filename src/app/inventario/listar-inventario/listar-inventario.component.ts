import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Producto } from '../../models/producto';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';

@Component({// AQUI LLEGARIA LA INFO DESDE LA API AL AÑADIR UN PRODUCTO
  selector: 'app-listar-inventario',//id unico para identificar este component
  standalone: false,
  templateUrl: './listar-inventario.component.html',
  styleUrl: './listar-inventario.component.css'
})
export class ListarInventarioComponent {
  @ViewChild('modalProducto') modal: ElementRef | undefined;
  vectorProductos: Producto[] = [
    {
      codigo: 278, nproducto: "Hidratante profundo", cantidad: 22, seccion: 'tratamientos',
      marca: 'L Oréal'
    },
    {
      codigo: 553, nproducto: "Spray", cantidad: 30, seccion: 'estilos',
      marca: 'L Oréal'
    }
  ];

  productoSeleccionado: Producto | undefined = undefined;

  isNew: boolean = false;

  EditarProducto(producto: Producto) {
    this.isNew = false;
    this.productoSeleccionado = producto;

  }

  NuevoProducto() {
    this.isNew = true;
    this.productoSeleccionado = { codigo: 0, nproducto: "", cantidad: 0, seccion: "", marca: "" };
  }

  GuardarProducto() {
    if (this.isNew) {
      this.vectorProductos.push(this.productoSeleccionado!);//equivalente llamar una API
      this.productoSeleccionado = undefined;
      this.CerrarModal(this.modal)
      // Swal.fire({
      //   allowEscapeKey:true
      // })
    }
    else {
      this.productoSeleccionado = undefined;//lo limpia
      this.CerrarModal(this.modal)
    }
    Swal.fire({ title: "Producto guardado!", icon: 'success' })
  }

  EliminarProducto(prod: Producto) {

    Swal.fire(
      {
        icon: 'warning',
        title: `¿Deseas eliminar "${prod.nproducto}"?`,
        showDenyButton: true,
        showConfirmButton: true,
        denyButtonText: 'Mejor no',
        confirmButtonText: 'Si, eliminalo',
        allowOutsideClick: false,
        reverseButtons: true

      }
    )

      .then(respuesta => {
        if (respuesta.isConfirmed) {
/////// AQUI VA CODIGO LLAMADO API PAra
//  DELETE
          this.productoSeleccionado = { codigo: 0, nproducto: "", cantidad: 0, seccion: "", marca: "" };

          Swal.fire({
            title: `"${prod.nproducto}" se ha eliminado correctamente`,
            icon: 'success'
          })
        }
        else {
          Swal.fire({
            title: ` No se eliminó`,
            icon: 'error'
          })
        }

      });
  }

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
//, Cantidad: 4, Seccion: "Tratamientos", Marca: "Enkor"}
