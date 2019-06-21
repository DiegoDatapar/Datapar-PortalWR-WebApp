import { TableConfiguracao } from './../../../ng-bootstrap-componentes/busca-avancada/configuracoes-table';
import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'pwr-cotacoes-em-aberto',
  templateUrl: './cotacoes-em-aberto.component.html',
  styleUrls: ['./cotacoes-em-aberto.component.css']
})
export class CotacoesEmAbertoComponent implements OnInit {

  configuracoesColunas: TableConfiguracao[] = [
    new TableConfiguracao('Código', 'Codcon'),
    new TableConfiguracao('Descrição', 'Descri'),
    new TableConfiguracao('Filial', 'Razsoc', '', 'xRazaoFilial')
  ];

  constructor() { }

  ngOnInit() {
  }

}
