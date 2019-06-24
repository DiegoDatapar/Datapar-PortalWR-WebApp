import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pwr-itens-cotacao',
  templateUrl: './itens-cotacao.component.html',
  styleUrls: ['./itens-cotacao.component.css']
})
export class ItensCotacaoComponent implements OnInit {

  id: number;

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
  }

}
