import {Component} from '@angular/core';
import {USUARIOS} from '../../shared/model/USUARIOS';
import {ActivatedRoute, Router} from '@angular/router';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from "../../shared/services/usuario.service";
import Swal from "sweetalert2";

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

    constructor(private rotaAtual: ActivatedRoute, private roteador: Router, private usuarioService: UsuarioService) {
        const idUsuario = this.rotaAtual.snapshot.paramMap.get('id') || undefined;
        if (idUsuario) {
            this.editando = true;
            this.usuario = this.usuarios.filter(usuario => usuario.id == idUsuario)[0]
        }
    }

    manterUsuario() {
        if (!this.editando) {
            try {
                this.usuarioService.cadastrar(this.usuario);
                Swal.fire({
                    title: 'Sucesso!',
                    text: 'Usuário cadastrado com sucesso.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } catch (e: any) {
                Swal.fire({
                    title: 'Erro!',
                    text: e,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
            // this.usuarios.push(
            //     {
            //         id: this.usuario.id,
            //         nome: this.usuario.nome,
            //         idade: this.usuario.idade
            //     });
            this.usuario = {id: '0', nome: '', idade: 0};
        } else {
        }
        this.roteador.navigate(['listagem-usuarios']);
    }

    acao() {
        return this.editando? 'Edição': 'Cadastro';
    }
}
