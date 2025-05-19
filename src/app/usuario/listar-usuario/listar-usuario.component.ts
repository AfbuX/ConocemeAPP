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
  vectorUsuario: Usuario[] = [


    // {id:1, nombre:"Carlos", fecha:new Date(), roll: "Admon", email: "tdea@tdea.com" , password: "123"  },
    // {id:2, nombre: "Maria", fecha:new Date(),  roll: "Empleado", email: "tdea2@tdea.com", password: "456" },
    // {id:3, nombre: "Pablo", fecha:new Date(), roll: "Admon", email: "tdea3@tdea.com", password: "789"},
    // {id:4, nombre: "Oscar", fecha:new Date(), roll: "Cliente", email: "tdea4@tdea.com", password: "7839"},
    // {id:5, nombre: "Tytiana", fecha:new Date(), roll: "Cliente", email: "tdea5@tdea.com", password: "7489"},
    // {id:6, nombre: "Claudia", fecha:new Date(), roll: "Cliente", email: "tdea6@tdea.com", password: "6789"},
    // {id:7, nombre: "Tito", fecha:new Date(), roll: "Cliente", email: "tdea7@tdea.com", password: "7789"},
    // {id:8, nombre: "Manuel", fecha:new Date(), roll: "Cliente", email: "tdea8@tdea.com", password: "9789"},
    // {id:9, nombre: "Arlong", fecha:new Date(), roll: "Cliente", email: "tdea9@tdea.com", password: "1789"},

  ];

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

    //---------------------V2-----------------------//

 if (this.isNew) {
    // Llamada API por POST
    this._usuarioservice.postUsuario(this.usuarioSeleccion!)
        
        this.usuarioSeleccion = undefined;
        this._util.CerrarModal(this.modal);
        Swal.fire({ title: 'Usuario creado exitosamente', icon: 'success' });
      ;
  } else {
    // Llamada API por PUT
    this._usuarioservice.putUsuario(this.usuarioSeleccion!);
      
        this.usuarioSeleccion = undefined;
        this._util.CerrarModal(this.modal);
        Swal.fire({ title: 'Usuario actualizado correctamente', icon: 'success' });
      
    
  }

    // ---------------------V1-----------------------//
    // if (this.isNew) {
    //   this.vectorUsuario.push(this.usuarioSeleccion!); //Equivalente a llamar en una api
    //   this.usuarioSeleccion = undefined;
    //   this._util.CerrarModal(this.modal)
    // }
    // else {
    //   //llamada api por put
    //   this.usuarioSeleccion = undefined;
    //   this._util.CerrarModal(this.modal)
    // }

    // Swal.fire({ title: 'Cambios Completados', icon: 'success' })

    //------------------------------------------------------//
  }

  eliminarUsuario(us: Usuario) {

    

    
    Swal.fire(
      {
        icon: 'question',
        title: `¿Está seguro de eliminar el usuario: ${us.nombre}?`,
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: 'No, Cancelar',
        confirmButtonText: 'Si, Confirmar',
        allowOutsideClick: false,
        buttonsStyling: false,
        reverseButtons: true,

        customClass: {
          cancelButton: 'btn btn-secondary',
          confirmButton: 'btn btn-danger',


        }
      }
    )
      .then(rs => {
        if (rs.isConfirmed) {


          Swal.fire({
            title: 'Usuario Eliminado Correctamente',
            icon: 'success'
          })
        }
      });

      
  }




}
