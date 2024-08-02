import { Component } from '@angular/core';
import {USUARIOS} from "../shared/model/USUARIOS";

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrl: './listagem-usuario.component.scss'
})
export class ListagemUsuarioComponent {

  usuarios = USUARIOS;
}
