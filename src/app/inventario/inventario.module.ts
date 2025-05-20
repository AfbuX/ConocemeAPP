import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarInventarioComponent } from './listar-inventario/listar-inventario.component';
import { RouterModule, Routes } from '@angular/router';
import { CaProdComponent } from './ca-prod/ca-prod.component';
import { FormsModule } from '@angular/forms';

const ROUTES: Routes = [
  {
    path: '',//vacio para que sea la ruta raiz
    component: ListarInventarioComponent
  }
]


@NgModule({
  declarations: [
    ListarInventarioComponent,
    CaProdComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ]
})
export class InventarioModule { }
