import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCitaComponent } from './listar-citas/listar-citas.component';
import { RouterModule, Routes } from '@angular/router';
import { CuCitasComponent } from './cu-citas/cu-citas.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path:"agenda",
    component:ListarCitaComponent,
  },
  
];

@NgModule({
  declarations: [
    ListarCitaComponent,
    CuCitasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class CitaModule { }