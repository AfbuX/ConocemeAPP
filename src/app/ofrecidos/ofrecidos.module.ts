import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarOfrecidosComponent } from './listar-ofrecidos/ofrecidos.component';
import { CitaSharedModule } from './cita-shared.module';

const ROUTES: Routes = [
  {
    path: '',//vacio para que sea la ruta raiz
    component: ListarOfrecidosComponent
  }
]

@NgModule({
  declarations: [
    ListarOfrecidosComponent
  ],
  imports: [
    CitaSharedModule,
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class OfrecidosModule { }
