import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroUsuarioComponent} from "./cadastro-usuario/cadastro-usuario.component";
import {ListagemUsuarioComponent} from "./listagem-usuario/listagem-usuario.component";
import {LayoutModule} from "../layout/layout.module";

@NgModule({
  declarations: [CadastroUsuarioComponent, ListagemUsuarioComponent],
  imports: [
    CommonModule, LayoutModule
  ],
  exports: [
    CadastroUsuarioComponent, ListagemUsuarioComponent
  ]
})
export class UsuarioModule { }
