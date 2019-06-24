import { tap } from 'rxjs/operators';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfiguraApiService } from 'src/app/configuracoes/configura-api.services';
import { Usuario } from './usuario';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { ArmazenamentoLocalService } from 'src/app/comum/armazenamento-local/armazenamento-local.services';

const parametros = new HttpParams({
  fromObject: {}
});

const chaveAutenticacao: string = 'auth';
const chaveExpiracao: string = 'authExpiration';
const chaveUsuario: string = 'authUsername';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  url: string;

  constructor(private httpCliente: HttpClient,
              private localStorage: ArmazenamentoLocalService,
              private configuracaoApi: ConfiguraApiService) {
    this.url = `${configuracaoApi.Configuracoes().urlApi}Token`;

  }

  Autenticar(usuario: Usuario) {
    const parametrosUrl = parametros
      .set('grant_type', 'password')
      .set('userName', usuario.usuario)
      .set('password', usuario.senha);

    return this.httpCliente.post<Token>(this.url, parametrosUrl, { observe: 'response' })
      .pipe(tap(res => {

        var token = res.body['access_token'];
        var expiracao = res.body['expiration'];

        localStorage.setItem(chaveAutenticacao, token);
        localStorage.setItem(chaveExpiracao, expiracao);
        localStorage.setItem(chaveUsuario, usuario.usuario);

      }))
      ;

  }

  Autenticado() {
    return this.localStorage.existeChave(chaveAutenticacao);
  }

  obterUsuario(): Usuario {
    let nomeUsuario = this.localStorage.obterItem(chaveUsuario);

    let usuario: Usuario = new Usuario();
    usuario.usuario = nomeUsuario;

    return usuario;

  }

  obterToken(): string {

    return this.localStorage.obterItem(chaveAutenticacao);

  }

  obterExpiracao(): string {
    return this.localStorage.obterItem(chaveExpiracao);
  }

  Sair() {
    this.localStorage.removerItem(chaveAutenticacao);
    this.localStorage.removerItem(chaveExpiracao);
    this.localStorage.removerItem(chaveUsuario);
  }
}
