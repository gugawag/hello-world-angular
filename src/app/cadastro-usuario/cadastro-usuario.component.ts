import {Component} from '@angular/core';
import {USUARIOS} from "../shared/model/USUARIOS";
import {ActivatedRoute} from "@angular/router";
import {Usuario} from "../shared/model/usuario";

@Component({
    selector: 'app-cadastro-usuario',
    templateUrl: './cadastro-usuario.component.html',
    styleUrl: './cadastro-usuario.component.scss'
})
export class CadastroUsuarioComponent {
    title = 'hw';
    usuarios = USUARIOS;
    usuario = new Usuario('0', '', 0);
    editando = false;

    constructor(private rotaAtual: ActivatedRoute) {
        const idUsuario = this.rotaAtual.snapshot.paramMap.get('id') || undefined;
        if (idUsuario) {
            this.editando = true;
            this.usuario = this.usuarios.filter(usuario => usuario.id == idUsuario)[0]
        }
    }

    manterUsuario() {
        if (!this.editando) {
            this.usuarios.push(
                {
                    id: this.usuario.id,
                    nome: this.usuario.nome,
                    idade: this.usuario.idade
                });
            this.usuario = {id: '0', nome: '', idade: 0};
        } else {

        }
    }

    acao() {
        return this.editando? 'Edição': 'Cadastro';
    }
}
