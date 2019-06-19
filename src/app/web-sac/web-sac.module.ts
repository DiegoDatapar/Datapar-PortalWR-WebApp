import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotacoesEmAbertoComponent } from './e-cotacao/cotacoes-em-aberto/cotacoes-em-aberto.component';

@NgModule({
  declarations: [CotacoesEmAbertoComponent],
  exports: [CotacoesEmAbertoComponent],
  imports: [
    CommonModule
  ]
})
export class WebSacModule { }
