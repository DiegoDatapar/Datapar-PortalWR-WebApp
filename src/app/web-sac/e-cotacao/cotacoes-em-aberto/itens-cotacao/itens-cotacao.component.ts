import { ConfiguracaoTabela, PipeEnum } from 'src/app/comum/modelos/configuracoes-tabela';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstficListagem, Estfic } from 'src/app/web-sac/modelos/Estfic';
import { ItensCotacaoService } from './itens-cotacao.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pwr-itens-cotacao',
  templateUrl: './itens-cotacao.component.html',
  styleUrls: ['./itens-cotacao.component.css']
})
export class ItensCotacaoComponent implements OnInit {

  id: number;
  Estfic: EstficListagem;

  formularioItensCotacao: FormGroup;

  @Input() codcot;

  registros: EstficListagem[];
  closeResult: string;
  configuracoesColunas: ConfiguracaoTabela[] = [
    new ConfiguracaoTabela('Cod. Produto', 'Codprod'),
    new ConfiguracaoTabela('Referência', 'ReferenciaProduto'),
    new ConfiguracaoTabela('Produto', 'DescricaoProduto'),
    new ConfiguracaoTabela('Unidade', 'Unidad'),
    new ConfiguracaoTabela('Quantidade', 'Quanti'),
    new ConfiguracaoTabela('Data de Dev.', 'DatDev', '', '', PipeEnum.datahora),
    new ConfiguracaoTabela('Observação (Comprador)', 'ObservacaoComprador'),
    new ConfiguracaoTabela('Fabricante', 'DescricaoFabricante'),
  ];

  constructor(private activatedRoute: ActivatedRoute,
              private itensCotacaoService: ItensCotacaoService,
              private modalService: NgbModal,
              private formBuilder: FormBuilder ) {
              this.Estfic = new EstficListagem();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.itensCotacaoService.Listar(this.id).subscribe(i => {this.registros = i; console.log(this.registros);});
  }

  registroSelecionado(registro: EstficListagem, modal) {
    this.initForm();
    this.abrirModal(modal);
    this.itensCotacaoService.Obter(registro.Codcot,registro.Codprod,registro.Codclifor).subscribe(res => {
      this.Estfic = res;
      this.initForm();
    });

  }

  initForm() {
    this.formularioItensCotacao = this.formBuilder.group({
      Codcot: [this.Estfic.Codcot],
      Codprod: [this.Estfic.Codprod],
      ReferenciaProduto: [this.Estfic.ReferenciaProduto],
      DescricaoProduto: [this.Estfic.DescricaoProduto],
      Quanti: [this.Estfic.Quanti],
      Unidade: [this.Estfic.Unidad],
      QtdOfe: [this.Estfic.QtdOfe],
      VlrUni: [this.Estfic.VlrUni],
      VlrTot: [this.Estfic.VlrTot],
      PreEnt: [this.Estfic.PreEnt],
      DatDev: [this.Estfic.DatDev],
      DescricaoFormaPagamento: [this.Estfic.DescricaoFormaPagamento],
      Observ: [this.Estfic.Observ],
      ObservacaoPagador: [this.Estfic.ObservacaoComprador],
      DescricaoFabricante: [this.Estfic.DescricaoFabricante]
    });
  }

  abrirModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', windowClass: 'modal-xlg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  }


}
