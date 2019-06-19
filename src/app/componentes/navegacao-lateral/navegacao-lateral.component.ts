import { Component, OnInit } from '@angular/core';
import { Menu } from '../modelos/menu';

@Component({
  selector: 'pwr-navegacao-lateral',
  templateUrl: './navegacao-lateral.component.html',
  styleUrls: ['./navegacao-lateral.component.css']
})
export class NavegacaoLateralComponent implements OnInit {

  menus: Menu[] = [
    { display: 'E-Cotação', link: '/ecotacao/cotacoesemaberto', linkicone: 'assets/iconesMenu/icon-clipboard-active.svg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
