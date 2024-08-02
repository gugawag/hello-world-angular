import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemUsuarioComponent} from "./listagem-usuario/listagem-usuario.component";
import {AppComponent} from "./app.component";
import {CadastroUsuarioComponent} from "./cadastro-usuario/cadastro-usuario.component";

const routes: Routes = [
  {
    path: 'listagem-usuarios',
    component: ListagemUsuarioComponent
  },
  {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
