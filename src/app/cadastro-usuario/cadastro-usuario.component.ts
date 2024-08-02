import { Component } from '@angular/core';
import {USUARIOS} from "../shared/model/USUARIOS";

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent {
  title = 'hw';
  usuarios = USUARIOS;
  usuario = {nome: '', idade: 0}

  inserirNome() {
    this.usuarios.push(
        {
          nome: this.usuario.nome,
          idade: this.usuario.idade
        });
    this.usuario = {nome: '', idade: 0};
  }
}
