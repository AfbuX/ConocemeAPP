import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Producto } from '../../models/producto';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';
import { inventarioService } from '../../service/inventario.service';
import { UtilityService } from '../../services/utility.service';


@Component({// AQUI LLEGARIA LA INFO DESDE LA API AL AÑADIR UN PRODUCTO
  selector: 'app-listar-inventario',//id unico para identificar este component
  standalone: false,
  templateUrl: './listar-inventario.component.html',
  styleUrl: './listar-inventario.component.css'
})
export class ListarInventarioComponent {
  @ViewChild('modalProducto') modal: ElementRef | undefined;
  vectorProductos: Producto[] = [];

  productoSeleccionado: Producto | undefined = undefined;
  isNew: boolean = false;
  isLoading= true;

  constructor(private _inventarioservice: inventarioService, private _util: UtilityService) {
      this.loadproducto();
    }
  
    loadproducto() {
      this.isLoading = true;
      this._inventarioservice.getProducto()
        .subscribe((rs) => {
          this.vectorProductos = rs;
          this.isLoading = false;
        });
    }

  EditarProducto(producto: Producto) {
    this._util.AbrirModal(this.modal);
    this.isNew = false;
    this.productoSeleccionado = producto;


  }

  NuevoProducto() {
    this._util.AbrirModal(this.modal);
    this.isNew = true;
    this.productoSeleccionado = { codigo: 0, nproducto: "", cantidad: 0, seccion: "", marca: "" };
   

  }

  GuardarProducto() {
     if (this.isNew) {
          this._inventarioservice.postProducto(this.productoSeleccionado!)
            .subscribe({
              next: () => {
                this.productoSeleccionado = undefined;
                this._util.CerrarModal(this.modal);
                Swal.fire({ title: 'Producto creado exitosamente', icon: 'success' });
              },
              error: (err) => {
                console.error(err);
                Swal.fire({ title: 'Ha ouccurido un error inesperado', icon: 'error' });
              }
            });
        } else {
           this._inventarioservice.putProducto(this.productoSeleccionado!)
            .subscribe({
              next: () => {
                this.productoSeleccionado = undefined;
                this._util.CerrarModal(this.modal);
                Swal.fire({ title: 'Producto creado exitosamente', icon: 'success' });
              },
              error: (err) => {
                console.error(err);
                Swal.fire({ title: 'Ha ouccurido un error inesperado', icon: 'error' });
              }
            });
          }
        }

  EliminarProducto(prod: Producto) {
Swal.fire({
    icon: 'question',
    title: `¿Está seguro de eliminar el usuario: ${prod.nproducto}?`,
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
      this._inventarioservice.deleteProducto(prod.codigo)
        .subscribe({
          next: () => {
            this.vectorProductos = this.vectorProductos.filter(u => u.codigo !== prod.codigo); 
            Swal.fire({ title: 'Usuario Eliminado Correctamente', icon: 'success' });
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
