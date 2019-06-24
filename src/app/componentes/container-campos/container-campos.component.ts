import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pwr-container-campos',
  templateUrl: './container-campos.component.html',
  styleUrls: ['./container-campos.component.css']
})
export class ContainerCamposComponent implements OnInit {

  @Input() validaObrigatorio: boolean;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
