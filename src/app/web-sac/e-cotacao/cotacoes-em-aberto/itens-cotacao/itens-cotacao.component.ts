import { EstfpgConfiguracoes } from './../../../modelos/EstfpgConfiguracoes';
import { ConfiguracaoTabela, PipeEnum } from 'src/app/comum/modelos/configuracoes-tabela';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstficListagem, Estfic } from 'src/app/web-sac/modelos/Estfic';
import { ItensCotacaoService } from './itens-cotacao.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'pwr-itens-cotacao',
  templateUrl: './itens-cotacao.component.html',
  styleUrls: ['./itens-cotacao.component.css']
})
export class ItensCotacaoComponent implements OnInit {

  id: number;
  Estfic: EstficListagem;
  NumeroLinha: number;

  formularioItensCotacao: FormGroup;

  @Input() codcot;

  registros: EstficListagem[];
  closeResult: string;
  configuracoesColunas: ConfiguracaoTabela[] = [
    new ConfiguracaoTabela('Referência', 'ReferenciaProduto'),
    new ConfiguracaoTabela('Produto', 'DescricaoProduto'),
    new ConfiguracaoTabela('Unidade', 'Unidad'),
    new ConfiguracaoTabela('Quantidade', 'Quanti'),
    new ConfiguracaoTabela('Data de Dev.', 'Datdev', '', '', PipeEnum.datahora),
    new ConfiguracaoTabela('Observação (Comprador)', 'ObservacaoComprador')
  ];

  constructor(private activatedRoute: ActivatedRoute,
    private notificacoes: NotifierService,
    private itensCotacaoService: ItensCotacaoService,
    private modalService: NgbModal,
    public estfpgConfiguracoes: EstfpgConfiguracoes,
    private formBuilder: FormBuilder) {
    this.Estfic = new EstficListagem();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.itensCotacaoService.Listar(this.id).subscribe(i => { this.registros = i; console.log(this.registros); });
  }

  registroSelecionado(registro: EstficListagem, modal) {
    this.initForm();
    this.abrirModal(modal);
    this.itensCotacaoService.Obter(registro.Codcot, registro.Codprod, registro.Codclifor).subscribe((res: EstficListagem[]) => {
      this.Estfic = res.shift();
      this.NumeroLinha = this.Estfic.NumeroLinha;
      this.initForm();
    });
  }

  NavegarPelosRegistros(atual: number) {
    this.NumeroLinha = atual;
    if (atual < this.registros.length && this.registros.length > -1) {

      const cotacao = this.registros[atual].Codcot;
      const produto = this.registros[atual].Codprod;
      const fornecedor = this.registros[atual].Codclifor;
      this.itensCotacaoService.Obter(cotacao, produto, fornecedor).subscribe((res: EstficListagem[]) => {
        this.Estfic = res.shift();
        this.initForm();
      });
    }
  }

  initForm() {
    this.formularioItensCotacao = this.formBuilder.group({
      Codcot: [this.Estfic.Codcot, []],
      Codprod: [this.Estfic.Codprod, []],
      Codclifor: [this.Estfic.Codclifor, []],
      Codfpg: [this.Estfic.Codfpg, []],
      ReferenciaProduto: [this.Estfic.ReferenciaProduto],
      DescricaoProduto: [this.Estfic.DescricaoProduto],
      DescricaoFornecedor: [this.Estfic.DescricaoFornecedor],
      Quanti: [this.Estfic.Quanti, []],
      Unidad: [this.Estfic.Unidad, []],
      Qtdofe: [{ value: this.Estfic.Qtdofe, disabled: true }, []],
      Vlruni: [this.Estfic.Vlruni, []],
      Vlrori: [this.Estfic.Vlrori, []],
      Totori: [this.Estfic.Vlrori, []],
      Vlrtot: [this.Estfic.Vlrtot, []],
      Preent: new FormControl(new Date(this.Estfic.Preent), { validators: [] }),
      Datdev: [this.Estfic.Datdev, []],
      Observ: [this.Estfic.Observ, []],
      Qtdemb: [this.Estfic.Qtdemb, []],
      Qtduni: [this.Estfic.Qtduni, []]
    });
  }


  CalcularQuantidadeUnitaria() {
    const qtdUnidade: number = this.formularioItensCotacao.controls.Qtduni.value;
    const qtdEmbalagem: number = this.formularioItensCotacao.controls.Qtdemb.value;
    this.formularioItensCotacao.controls.Qtdofe.setValue(qtdUnidade * qtdEmbalagem);
    this.CalcularTotal();
    this.CalcularTotalPre();
    this.CalcularValorOfertado();
    this.CalcularValorOfertadoPre();
  }

  CalcularTotal() {
    const qtdUnitaria: number = this.formularioItensCotacao.controls.Qtdofe.value;
    const vlrUnitario: number = this.formularioItensCotacao.controls.Vlruni.value;
    this.formularioItensCotacao.controls.Vlrtot.setValue(qtdUnitaria * vlrUnitario);
  }

  CalcularValorOfertado() {
    const qtdUnitaria: number = this.formularioItensCotacao.controls.Qtdofe.value;
    const vlrTotal: number = this.formularioItensCotacao.controls.Vlrtot.value;
    this.formularioItensCotacao.controls.Vlruni.setValue(vlrTotal / qtdUnitaria);
  }

  CalcularTotalPre() {
    const qtdUnitaria: number = this.formularioItensCotacao.controls.Qtdofe.value;
    const vlrPre: number = this.formularioItensCotacao.controls.Vlrori.value;
    this.formularioItensCotacao.controls.Totori.setValue(qtdUnitaria * vlrPre);
  }

  CalcularValorOfertadoPre() {
    const qtdUnitaria: number = this.formularioItensCotacao.controls.Qtdofe.value;
    const vlrTotal: number = this.formularioItensCotacao.controls.Totori.value;
    this.formularioItensCotacao.controls.Vlrori.setValue(vlrTotal / qtdUnitaria);
  }

  abrirModal(content: any) {
    this.modalService.open(content, {
      backdrop: 'static',
      keyboard: false,
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
      windowClass: 'modal-xsm'
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  }

  salvar() {
    debugger;
    const formSerial = this.formularioItensCotacao.getRawValue();
    if (formSerial.Codfpg.Codigo !== undefined) {
      formSerial.Codfpg = formSerial.Codfpg.Codigo;
    }
    this.itensCotacaoService.Salvar(formSerial as Estfic).subscribe(ret => {
      this.notificacoes.notify('success', 'Registro salvo com sucesso.');
      //this.modalService.dismissAll();
    }, err => {
      this.notificacoes.notify('error', 'Não foi possivel salvar o registro. Mais informações no console');
      console.log(err);
    });
  }


}
