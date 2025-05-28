import { Component, ElementRef, ViewChild } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../service/usuario.service';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-listar-usuario',
  standalone: false,
  templateUrl: './listar-usuario.component.html',
  styleUrl: './listar-usuario.component.css'
})
export class ListarUsuarioComponent {

  @ViewChild('modalUsuario') modal: ElementRef | undefined;
  vectorUsuario: Usuario[] = [];

  usuarioSeleccion: Usuario | undefined = undefined;
  isNew: boolean = false;
  isLoading = true;

  constructor(private _usuarioservice: UsuarioService, private _util: UtilityService) {
    this.loadusuario();
  }

  loadusuario() {
    this.isLoading = true;
    this._usuarioservice.getUsuarios()
      .subscribe((rs) => {
        this.vectorUsuario = rs;
        this.isLoading = false;
      });
  }

  editarUsuario(usuario: Usuario) {
    this._util.AbrirModal(this.modal);
    this.isNew = false;
    this.usuarioSeleccion = usuario;
  }
  nuevoUsuario() {
    this._util.AbrirModal(this.modal);
    this.isNew = true;
    this.usuarioSeleccion = { id: 0, fecha: new Date(), nombre: "", roll: "", email: "", dbpassword: "" };
  }

  guardarUsuario() {
    if (this.isNew) {
      this._usuarioservice.postUsuario(this.usuarioSeleccion!)
        .subscribe({
          next: () => {
            this.usuarioSeleccion = undefined;
            this._util.CerrarModal(this.modal);
            Swal.fire({ title: 'Usuario creado exitosamente', icon: 'success' });
        },
          error: (err) => {
            console.error(err);
            Swal.fire({ title: 'Ha ouccurido un error inesperado', icon: 'error' });
        }
        });
    } else {
       this._usuarioservice.putUsuario(this.usuarioSeleccion!)
        .subscribe({
          next: () => {
            this.usuarioSeleccion = undefined;
            this._util.CerrarModal(this.modal);
            Swal.fire({ title: 'Usuario creado exitosamente', icon: 'success' });
          
        },
          error: (err) => {
            console.error(err);
            Swal.fire({ title: 'Ha ouccurido un error inesperado', icon: 'error' });
          } 
        });
    }
    
    
    
  }


  eliminarUsuario(us: Usuario) {
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
      this._usuarioservice.deleteUsuario(us.id)
        .subscribe({
          next: () => {
            this.vectorUsuario = this.vectorUsuario.filter(u => u.id !== us.id); 
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
