import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pwr-navegacao-superior',
  templateUrl: './navegacao-superior.component.html',
  styleUrls: ['./navegacao-superior.component.css']
})
export class NavegacaoSuperiorComponent implements OnInit {

  constructor(public autenticacaoService: AutenticacaoService, private router: Router) { }

  ngOnInit() {
  }

  Sair() {
    this.autenticacaoService.Sair();
    this.router.navigate(['login']);
  }

}
