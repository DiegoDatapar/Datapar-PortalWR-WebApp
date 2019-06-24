import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentesModule } from '../componentes/componentes.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgBootstrapDropdownComponent } from './ng-bootstrap-dropdown/ng-bootstrap-dropdown.component';
import { FilterDisplay } from './ng-bootstrap-dropdown/ng-bootstrap-filter-display.pipe';
import { NgBootstrapTableComponent } from './ng-bootstrap-table/ng-bootstrap-table.component';
import { NgBootstrapDatePickerRangeComponent } from './ng-bootstrap-date-picker-range/ng-bootstrap-date-picker-range.component';
import { BuscaAvancadaComponent } from './busca-avancada/busca-avancada.component';
import { NgbdSortableHeader } from './ng-bootstrap-table/sortable';
import { NgBootstrapDropdownBasicComponent } from './ng-bootstrap-dropdown-basic/ng-bootstrap-dropdown-basic.component';

@NgModule({
  declarations: [NgBootstrapDropdownComponent,
                FilterDisplay,
                NgBootstrapTableComponent,
                NgBootstrapDatePickerRangeComponent,
                BuscaAvancadaComponent,
                NgbdSortableHeader,
                NgBootstrapDropdownBasicComponent],
  imports: [CommonModule, 
    FormsModule,
    NgbModule,
    ComponentesModule,
    BrowserModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:  [NgBootstrapDropdownComponent,
             NgBootstrapTableComponent,
             NgBootstrapDatePickerRangeComponent,
             BuscaAvancadaComponent,
             NgbdSortableHeader,
             NgBootstrapDropdownBasicComponent],
  bootstrap: [NgBootstrapDropdownComponent]
})
export class NgBootstrapComponentesModule { }
