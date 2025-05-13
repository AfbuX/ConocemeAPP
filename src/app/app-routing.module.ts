import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfrecidosComponent } from './ofrecidos/ofrecidos.component';

const routes: Routes = [
  {
    path: 'inventario',
    loadChildren: ()=> import ('./inventario/inventario.module').then(m=>m.InventarioModule)
  },
  {
    path: 'ofrecidos', 
    component: OfrecidosComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
