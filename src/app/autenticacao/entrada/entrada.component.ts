import { Component, OnInit} from '@angular/core';
import { Usuario } from '../usuario';
import { AutenticacaoService } from '../autenticacao.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'pwr-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  usuario: Usuario;
  expirado: boolean = false;

  constructor(private auth: AutenticacaoService, private router: Router, private notificacoes: NotifierService) {
    this.usuario = new Usuario();
    this.notificacoes = notificacoes;

    if (this.router.getCurrentNavigation().extras.state) {
      if (this.router.getCurrentNavigation().extras.state.expired) {
        this.expirado = true;
      }
    }
  }

  ngOnInit() {
  }

  Entrar(event) {
    event.preventDefault();
    this.auth.Autenticar(this.usuario)
      .subscribe(ret => {
        this.router.navigate(['']);
      }, erro => {this.notificacoes.notify('error', 'Usuário e/ou senha inválidos!  '); })
      ;

  }

}
