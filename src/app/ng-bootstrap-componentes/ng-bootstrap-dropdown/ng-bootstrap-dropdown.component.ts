import { Component, OnInit, Input } from '@angular/core';
import { DropDownMenu } from './ng-bootstrap-dropdown-menu';

@Component({
  selector: 'pwr-ng-bootstrap-dropdown',
  templateUrl: './ng-bootstrap-dropdown.component.html',
  styleUrls: ['./ng-bootstrap-dropdown.component.css']
})
export class NgBootstrapDropdownComponent implements OnInit {

  @Input() menus: any = [];
  filtro: string;

  onEvent(event) {
    event.stopPropagation();
  }

  ngOnInit() {
    this.menus = [{ Display: 'WebSac',
                  Url: '/websac',
                  Collapse: true,
                  lSubcategorias: [{Display: 'Administração',
                                    Collapse: true,
                                    lSubcategorias: [ { Display: 'Usuarios',
                                                        Url: '/usuario',
                                                        Collapse: true },
                                                      { Display: 'Permissões',
                                                        Url: '/permissoes',
                                                        Collapse: true } ] },
                                    { Display: 'Recursos',
                                      Collapse: true,
                                      lSubcategorias: [ { Display: 'E-Cotação',
                                                          Url: '/cotacoesemaberto',
                                                          Collapse: true },
                                                        { Display: 'Check Point',
                                                          Url: '',
                                                          Collapse: true },
                                                        { Display: 'Portaria',
                                                          Url: '',
                                                          Collapse: true } ] },{ Display: 'Relatórios',
                                                          Collapse: true,
                                                          lSubcategorias: [ { Display: 'Personalizados',
                                                                              Url: '/usuario',
                                                                              Collapse: true },
                                                                             ] } ] }];
  }

}
