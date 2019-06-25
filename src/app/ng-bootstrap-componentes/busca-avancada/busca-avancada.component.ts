import { GrupoFormularioService } from './../../comum/grupo-formulario/grupo-formulario.service';
import { ConfiguracaoTabela } from 'src/app/comum/modelos/configuracoes-tabela';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModalRef, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AutoCompleteService } from 'src/app/comum/servicos/auto-complete.service';
import { ListarPaginadoService } from '../servicos/listar-paginado.service';

@Component({
  selector: 'pwr-busca-avancada',
  templateUrl: './busca-avancada.component.html',
  styleUrls: ['./busca-avancada.component.css']
})
export class BuscaAvancadaComponent implements OnInit {

  @Input() name: string;
  @Input() labelModal = '';
  @Input() api = '';
  @Input() configs: ConfiguracaoTabela[];
  @Input() model: any;
  @Output() itemSelecionado = new EventEmitter<any>();
  @Input() bindinghighlight;
  @Input() formatter;
  @Input() form: FormGroup;
  @Input() paginacao: boolean = false;
  @Input() apiPaginacao: string = '';
  @Input() focoinicial: boolean = false;

  focado: boolean;
  closeResult: string;
  filtro: string = '';
  registros: any;
  page = 1;
  pageSize = 10;
  currentModal: NgbModalRef;

  constructor(private modalService: NgbModal,
    private serv: AutoCompleteService,
    private formgrService: GrupoFormularioService,
    private listaService: ListarPaginadoService
  ) { }

  ngOnInit() {

  }

  open(content) {
    this.currentModal = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });

    this.currentModal
      .result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  paginacaoChanged(pagatu) {
    this.page = pagatu;
    this.filtrar();
  }

  filtrar() {

    let filtros = {};
    filtros['q'] = this.filtro;
    if (this.paginacao) {
      this.listaService.Listar(this.apiPaginacao, this.page, this.pageSize, filtros, null, null)
        .subscribe(i => this.registros = i);
    } else {
      this.serv.Filtrar(this.filtro, this.api).subscribe(i => this.registros = i, (err) => console.log(err));
    }

  }

  public itemSelecionadoInterno(item: any) {

    this.formgrService.atualizaValor(this.form, this.name, item);

    if (item != null) {
      this.itemSelecionado.emit(item);
    }
  }

  private itemSelecionadoModal(item: any) {
    this.model = item;
    // this.itemSelecionado.emit(item);
    this.itemSelecionadoInterno(item);
    this.currentModal.dismiss('item selecionado');
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  autocompleteFocado(arg: boolean) {
    this.focado = arg;
  }

}
