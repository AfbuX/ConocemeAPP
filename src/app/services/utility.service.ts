import { ElementRef, Injectable } from '@angular/core';
import { Modal } from 'bootstrap';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  Login(email: string, password: string): Observable<boolean> {
    return new Observable(subs => {
      // Credenciales para administrador
      const adminCredentials = email === 'admin@gmail.com' && password === 'Admin';
      
      // Credenciales para cliente
      const clientCredentials = email === 'cliente@gmail.com' && password === 'Cliente123';
      
      // Credenciales para trabajador
      const workerCredentials = email === 'trabajador@gmail.com' && password === 'Trabajador123';

      // Retorna true si alguna de las credenciales coincide
      const isValid = adminCredentials || clientCredentials || workerCredentials;
      
      subs.next(isValid);
      subs.complete();
    });
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
