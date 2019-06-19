import { Component, OnInit, Input } from '@angular/core';
import { DropDownMenu } from './ng-bootstrap-dropdown-menu';

@Component({
  selector: 'pwr-ng-bootstrap-dropdown',
  templateUrl: './ng-bootstrap-dropdown.component.html',
  styleUrls: ['./ng-bootstrap-dropdown.component.css']
})
export class NgBootstrapDropdownComponent implements OnInit {

  @Input() menus: DropDownMenu;
  filtro: string;

  onEvent(event) {
    event.stopPropagation();
  }

  ngOnInit() {
    // this.service.Obter().subscribe(itens => {
    //   this.menus = itens;
    // });
  }

}
