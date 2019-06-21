import { TipoEnum } from './../busca-avancada/configuracoes-table';
import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { TableConfiguracao } from '../busca-avancada/configuracoes-table';
import { RetornoApi } from 'src/app/comum/modelos/retorno-api';
import { ListarPaginadoService } from '../servicos/listar-paginado.service';
import { Router } from '@angular/router';
import { NgbdSortableHeader, SortEvent } from './sortable';

@Component({
  selector: 'pwr-ng-bootstrap-table',
  templateUrl: './ng-bootstrap-table.component.html',
  styleUrls: ['./ng-bootstrap-table.component.css']
})
export class NgBootstrapTableComponent implements OnInit {

  @Input() api: string;
  @Input() rotaRedir: string;
  @Input() codigored: string; // Código para redirecionamento em listagem
  @Input() codigored2: string;
  @Input() configuracoesCols: TableConfiguracao[];

  tipos = TipoEnum;

  retorno: RetornoApi;
  page = 1;
  pageSize = 10;
  column: string;
  direction: string;
  filtros: any = {};

  constructor(private listaService: ListarPaginadoService, private router: Router) { }

  ngOnInit() {
    this.filtrar();
  }

  filtrar(pagatu: number = 1) {
    this.page = pagatu;
    this.aplicarListagem();
  }

  paginacaoChanged(pagatu) {
    this.filtrar(pagatu);
  }

  novo() {
    // Ajustar lógica de tratativa de redirecionamento
    if (this.codigored2 !== undefined) {
      this.trataRedirecionamento(0, 0);
    } else {
      this.trataRedirecionamento(0, undefined);
    }

  }

  redirecionar(linhaselecionada: any) {

    this.trataRedirecionamento(linhaselecionada[this.codigored], linhaselecionada[this.codigored2]);
  }

  trataRedirecionamento(arg1, arg2) {

    if (arg2 != undefined) {
      this.router.navigate([`/${this.rotaRedir}/`, arg1, arg2]);
    }
    else {
      this.router.navigate([`/${this.rotaRedir}/`, arg1]);
    }

  }

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.column = column;
    this.direction = direction;
    this.page = 1;

    this.aplicarListagem();
  }

  aplicarListagem() {
    this.listaService.Listar(this.api, this.page, this.pageSize, this.filtros, this.direction, this.column)
      .subscribe(i => {this.retorno = i});
  }

  limpaFiltro(arg1, arg2?) {
    delete this.filtros[arg1];

    if (arg2) {
      delete this.filtros[arg2];
    }

    this.aplicarListagem();
  }

}
