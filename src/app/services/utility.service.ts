import { ElementRef, Injectable } from '@angular/core';
import { Modal } from 'bootstrap';
import { Observable, map } from 'rxjs';
import { UsuarioService } from '../service/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }
  // constructor(private _usuarioService: UsuarioService) { }

  Login(email: string, password: string, rol: string): Observable<boolean> {

    return new Observable(subs => {
      let adminCredentials = false;
      let workerCredentials = false;
      let clientCredentials = false;

      if (rol === 'Empleado') {
          adminCredentials = email === 'admin@gmail.com' && password === 'Admin';
          workerCredentials = email === 'empleado@gmail.com' && password === 'Empleado123';
      } else {
          clientCredentials = email === 'cliente@gmail.com' && password === 'Cliente123';
      }

      const isValid = adminCredentials || clientCredentials || workerCredentials;
      
      subs.next(isValid);
      subs.complete();
    });

    // const adminHardcoded = {
    //   email: 'admin@example.com',
    //   password: 'Admin123',
    //   rol: 'Administrador'
    // };

    // return this._usuarioService.getUsuarios().pipe(
    //     map(usuarios => {
    //         if (email === adminHardcoded.email && 
    //             password === adminHardcoded.password && 
    //             rol === adminHardcoded.rol) {
    //             return true;
    //         }

    //         const usuarioEncontrado = usuarios.find(usuario => 
    //             usuario.email === email && 
    //             usuario.dbpassword === password && 
    //             usuario.roll === rol
    //         );
            
    //         return !!usuarioEncontrado;
    //     })
    // );
  }

  AbrirModal(modal:ElementRef | undefined){
    if (modal){
      let bsModal = Modal.getOrCreateInstance(modal.nativeElement);
      bsModal.show();
    }
  }

  CerrarModal(modal:ElementRef | undefined){
    if (modal){
      let bsModal = Modal.getInstance(modal?.nativeElement)
      bsModal?.hide();

      let backdrop = document.querySelector(".modal-backdrop.fade.show");
      if (backdrop)
      {
        backdrop.parentNode?.removeChild(backdrop);
      }
      document.body.removeAttribute('style');
      document.body.removeAttribute('class');
    }
  }
}
