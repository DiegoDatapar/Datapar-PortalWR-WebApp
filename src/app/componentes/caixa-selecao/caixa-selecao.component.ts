import { Component, OnInit, EventEmitter, OnChanges, Input, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GrupoFormularioService } from 'src/app/comum/grupo-formulario/grupo-formulario.service';

@Component({
  selector: 'pwr-caixa-selecao',
  templateUrl: './caixa-selecao.component.html',
  styleUrls: ['./caixa-selecao.component.css']
})
export class CaixaSelecaoComponent implements OnInit, OnChanges {

  valor: boolean;
  @Input() valorVerdadeiro = 'S';
  @Input() valorFalso = 'N';

  @Input() status: any;
  @Input() label: string;
  @Output() bindingPai = new EventEmitter<string>();
  @Input() form: FormGroup;
  @Input() name: string;

  focado: boolean;

  constructor(private grupoFormularioService: GrupoFormularioService) {

  }

  onChecked(e: Event) {
    const retorno = this.valor === true ? this.valorVerdadeiro : this.valorFalso;
    this.grupoFormularioService.atualizaValor(this.form, this.name, retorno);
    this.bindingPai.emit(retorno);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.status) {
      if (changes.status.currentValue !== undefined) {
        this.valor = changes.status.currentValue === this.valorVerdadeiro ? true : false;


      }
    }
  }

  onFocus() {
    this.focado = true;
  }

  onBlur() {
    this.focado = false;
  }


  ngOnInit() {
  }

}
