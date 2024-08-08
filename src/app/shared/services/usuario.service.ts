import { Injectable } from '@angular/core';
import {USUARIOS} from "../model/USUARIOS";
import {Usuario} from "../model/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios = USUARIOS;
  constructor() { }

  cadastrar(usuario: Usuario) {
    const usuariosRetornados = this.usuarios.filter(u => u.id == usuario.id);
    if (usuariosRetornados.length > 0) {
      throw new Error('Usuário já cadastrado');
    }
    this.usuarios.push(usuario);
  }

}
