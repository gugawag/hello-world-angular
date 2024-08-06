import { Component } from '@angular/core';
import {USUARIOS} from "../shared/model/USUARIOS";
import {Usuario} from "../shared/model/usuario";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrl: './listagem-usuario.component.scss'
})
export class ListagemUsuarioComponent {

  usuarios = USUARIOS;

  constructor(private roteador: Router) {
  }

  remover(usuarioARemover: Usuario) {
    this.usuarios = this.usuarios.filter(usuario => usuario.nome != usuarioARemover.nome);
  }

  editar(usuarioAEditar: Usuario) {
    this.roteador.navigate(['/edicao-usuario', usuarioAEditar.id])
  }
}
