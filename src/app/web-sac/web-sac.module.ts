import { NgBootstrapComponentesModule } from './../ng-bootstrap-componentes/ng-bootstrap-componentes.module';
import { NgModule } from '@angular/core';
import { CotacoesEmAbertoComponent } from './e-cotacao/cotacoes-em-aberto/cotacoes-em-aberto.component';
import { ItensCotacaoComponent } from './e-cotacao/cotacoes-em-aberto/itens-cotacao/itens-cotacao.component';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { ComponentesModule } from '../componentes/componentes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalDraggableModule } from '../ng-bootstrap-componentes/ng-bootstrap-modal-draggable/ngb-modal-draggable.module';
import { PrimengModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [CotacoesEmAbertoComponent, ItensCotacaoComponent],
  exports: [CotacoesEmAbertoComponent, ItensCotacaoComponent],
  imports: [CommonModule, NgBootstrapComponentesModule, PrimengModule, ComponentesModule, FormsModule, ReactiveFormsModule, NgbModalDraggableModule ]
})
export class WebSacModule { }
