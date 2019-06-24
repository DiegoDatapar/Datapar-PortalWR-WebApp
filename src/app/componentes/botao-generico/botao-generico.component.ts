import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pwr-botao-generico',
  templateUrl: './botao-generico.component.html',
  styleUrls: ['./botao-generico.component.css']
})
export class BotaoGenericoComponent implements OnInit {

  @Input() descricao: string;
  @Input() altura: number;
  @Input() largura: number;
  @Input() desabilitado: boolean;
  @Input() focado: boolean;
  @Input() classe: string;
  @Input() tipo: string = 'button';
  @Output() metodoPai = new EventEmitter<any>();
  dimensoes: {};

  ngOnInit() {
    this.dimensoes = {
      'height': this.altura + 'px',
      'width': this.largura + 'px'
    };
  }

  metodo() {
    this.metodoPai.emit();
  }

}
