import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OfrecidosComponent } from './ofrecidos/ofrecidos.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'inventario',
    loadChildren: ()=> import ('./inventario/inventario.module').then(m=>m.InventarioModule)
  },
  {
    path: 'ofrecidos', 
    component: OfrecidosComponent
  },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
