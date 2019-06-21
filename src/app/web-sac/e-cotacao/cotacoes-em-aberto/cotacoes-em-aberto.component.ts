import { TableConfiguracao, PipeEnum } from './../../../ng-bootstrap-componentes/busca-avancada/configuracoes-table';
import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'pwr-cotacoes-em-aberto',
  templateUrl: './cotacoes-em-aberto.component.html',
  styleUrls: ['./cotacoes-em-aberto.component.css']
})
export class CotacoesEmAbertoComponent implements OnInit {


  configuracoesColunas: TableConfiguracao[] = [
    new TableConfiguracao('Cotação', 'Codcot'),
    new TableConfiguracao('Data Cotação', 'Datref', '', '', PipeEnum.datahora),
    new TableConfiguracao('Observações', 'Cotobs'),
    new TableConfiguracao('Filial', 'Razsoc')
  ];

  constructor() { }

  ngOnInit() {
  }

}
