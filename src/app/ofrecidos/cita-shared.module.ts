// cita-shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CuCitasComponent } from '../cita/cu-citas/cu-citas.component';

@NgModule({
  declarations: [CuCitasComponent],
  imports: [CommonModule, FormsModule],
  exports: [CuCitasComponent]
})
export class CitaSharedModule {}
