import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pwr-cabecalho-secao',
  templateUrl: './cabecalho-secao.component.html',
  styleUrls: ['./cabecalho-secao.component.css']
})
export class CabecalhoSecaoComponent implements OnInit {

  @Input() descricao: string;

  constructor() { }

  ngOnInit() {
  }

}
