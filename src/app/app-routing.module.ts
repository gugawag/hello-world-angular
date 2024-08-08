import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemUsuarioComponent} from "./usuario/listagem-usuario/listagem-usuario.component";
import {AppComponent} from "./app.component";
import {CadastroUsuarioComponent} from "./usuario/cadastro-usuario/cadastro-usuario.component";

const routes: Routes = [
  {
    path: 'listagem-usuarios',
    component: ListagemUsuarioComponent
  },
  {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent
  },
  {
    path: 'edicao-usuario/:id',
    component: CadastroUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
