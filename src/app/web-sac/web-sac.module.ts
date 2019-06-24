import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotacoesEmAbertoComponent } from './e-cotacao/cotacoes-em-aberto/cotacoes-em-aberto.component';
import { NgBootstrapComponentesModule } from '../ng-bootstrap-componentes/ng-bootstrap-componentes.module';


@NgModule({
  declarations: [CotacoesEmAbertoComponent],
  exports: [CotacoesEmAbertoComponent],
  imports: [NgBootstrapComponentesModule,
    CommonModule
  ]
})
export class WebSacModule { }
