import { FotosComponent } from './fotos/fotos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //Home
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'fotos',
    component: FotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
