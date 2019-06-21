import { TableConfiguracao, PipeEnum, TipoEnum } from './../../../ng-bootstrap-componentes/busca-avancada/configuracoes-table';
import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'pwr-cotacoes-em-aberto',
  templateUrl: './cotacoes-em-aberto.component.html',
  styleUrls: ['./cotacoes-em-aberto.component.css']
})
export class CotacoesEmAbertoComponent implements OnInit {


  configuracoesColunas: TableConfiguracao[] = [
    new TableConfiguracao('Cotação', 'Codcot', '', 'Codcot' ),
    new TableConfiguracao('Data Cotação', 'Datref', '', 'DatrefInicial',PipeEnum.datahora, TipoEnum.data, 'DatrefFinal'),
    new TableConfiguracao('Observações', 'Cotobs', '', 'Cotobs' ),
    new TableConfiguracao('Filial', 'Razsoc', '', 'Razsoc')
  ];

  constructor() { }

  ngOnInit() {
  }

}
