import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pwr-limpa-objetos',
  templateUrl: './limpa-objetos.component.html',
  styleUrls: ['./limpa-objetos.component.css']
})
export class LimpaObjetosComponent implements OnInit {

  @Input() valor: any;
  @Output() limpou = new EventEmitter<any>();
  @Output() mudouValor = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  defineValor(value: string) {
    this.valor = value;
    this.mudouValor.emit(value);
  }

  limpar() {
    this.defineValor('');
    this.limpou.emit({
      limpou: true
    });
  }

}
