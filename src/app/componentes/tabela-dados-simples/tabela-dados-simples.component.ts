import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ConfiguracaoTabela } from 'src/app/comum/modelos/configuracoes-tabela';

@Component({
  selector: 'pwr-tabela-dados-simples',
  templateUrl: './tabela-dados-simples.component.html',
  styleUrls: ['./tabela-dados-simples.component.css']
})
export class TabelaDadosSimplesComponent implements OnInit {
  @Input() registros: Object[];
  @Input() configuracoesColunas: ConfiguracaoTabela[];
  @Output() SelecionarLinha = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  redirecionar(row: any) {
    this.SelecionarLinha.emit(row);
  }

}
