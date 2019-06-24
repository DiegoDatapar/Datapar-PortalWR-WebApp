import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pwr-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {

  @Input() icone: string;
  @Input() titulo: string;
  @Input() tituloid: string;
  @Input() id: string = '#';
  @Input() urlListagem: string;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  Navlist() {
    if (this.urlListagem !== undefined) {
      this.route.navigate([this.urlListagem]);
    }
  }

}
