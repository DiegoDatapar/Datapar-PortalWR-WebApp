import { NotificacoesModule } from './../notificacoes/notificacoes.module';
import { CommonModule } from '@angular/common';
import { EntradaComponent } from './entrada/entrada.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { HttpClientModule } from '@angular/common/http';
import { FocoModule } from '../comum/diretivas/foco/foco.module';
import { NgModule } from '@angular/core';


@NgModule({
  exports: [EntradaComponent],
  imports: [
    CommonModule,
    ComponentesModule,
    HttpClientModule, FocoModule, NotificacoesModule
  ],
  declarations: [EntradaComponent]
})
export class AutenticacaoModule { }
