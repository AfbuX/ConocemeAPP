import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login/:userType', component: LoginComponent },
  { path: 'registro', component: RegistrationComponent },

  { path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)},
  { path: 'agendar', loadChildren: () => import('./cita/cita.module').then(m => m.CitaModule)},
  { path: 'ofrecidos', loadChildren: () => import('./ofrecidos/ofrecidos.module').then(m => m.OfrecidosModule)},
  { path: 'inventario', loadChildren: ()=> import ('./inventario/inventario.module').then(m=>m.InventarioModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
