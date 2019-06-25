import {Component, OnInit } from '@angular/core';
import { ConfiguracaoTabela, PipeEnum, TipoEnum } from 'src/app/comum/modelos/configuracoes-tabela';

@Component({
  selector: 'pwr-cotacoes-em-aberto',
  templateUrl: './cotacoes-em-aberto.component.html',
  styleUrls: ['./cotacoes-em-aberto.component.css']
})
export class CotacoesEmAbertoComponent implements OnInit {


  configuracoesColunas: ConfiguracaoTabela[] = [
    new ConfiguracaoTabela('Cotação', 'Codcot', '', 'Codcot' ),
    new ConfiguracaoTabela('Data Cotação', 'Datref', '', 'DatrefInicial', PipeEnum.datahora, TipoEnum.data, 'DatrefFinal'),
    new ConfiguracaoTabela('Observações', 'Cotobs', '', 'Cotobs' ),
    new ConfiguracaoTabela('Filial', 'Razsoc', '', 'Razsoc')
  ];

  constructor() { }

  ngOnInit() {
  }

}
