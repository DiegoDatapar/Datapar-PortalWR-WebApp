import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentesModule } from '../componentes/componentes.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgBootstrapDropdownComponent } from './ng-bootstrap-dropdown/ng-bootstrap-dropdown.component';
import { FilterDisplay } from './ng-bootstrap-dropdown/ng-bootstrap-filter-display.pipe';

@NgModule({
  declarations: [NgBootstrapDropdownComponent, FilterDisplay],
  imports: [CommonModule, FormsModule,
    NgbModule,
    ComponentesModule,
    BrowserModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:  [NgBootstrapDropdownComponent],
  bootstrap: [NgBootstrapDropdownComponent]
})
export class NgBootstrapComponentesModule { }
