import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCitaComponent } from './listar-citas/listar-citas.component';
import { RouterModule, Routes } from '@angular/router';
import { CuCitasComponent } from './cu-citas/cu-citas.component';
import { FormsModule } from '@angular/forms';
import { CitaSharedModule } from '../ofrecidos/cita-shared.module';


const routes: Routes = [
  {
    path:"",
    component:ListarCitaComponent,
  },
];

@NgModule({
  declarations: [
    ListarCitaComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    CitaSharedModule
  ],

})
export class CitaModule { }