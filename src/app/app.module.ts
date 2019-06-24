
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotacoesEmAbertoComponent } from './web-sac/e-cotacao/cotacoes-em-aberto/cotacoes-em-aberto.component';
import { ComponentesModule } from './componentes/componentes.module';
import { NgBootstrapComponentesModule } from './ng-bootstrap-componentes/ng-bootstrap-componentes.module';
import { NavegacaoSuperiorComponent } from './componentes/navegacao-superior/navegacao-superior.component';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';



@NgModule({
  declarations: [
    AppComponent,
    NavegacaoSuperiorComponent,
    CotacoesEmAbertoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    NgBootstrapComponentesModule, AutenticacaoModule
  ],
  exports: [NavegacaoSuperiorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
