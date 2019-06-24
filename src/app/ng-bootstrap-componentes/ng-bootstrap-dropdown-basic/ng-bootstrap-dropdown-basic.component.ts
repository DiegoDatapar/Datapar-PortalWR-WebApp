import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pwr-ng-bootstrap-dropdown-basic',
  templateUrl: './ng-bootstrap-dropdown-basic.component.html',
  styleUrls: ['./ng-bootstrap-dropdown-basic.component.css']
})
export class NgBootstrapDropdownBasicComponent implements OnInit {

  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
