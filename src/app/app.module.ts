import { WebSacModule } from './web-sac/web-sac.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotacoesEmAbertoComponent } from './web-sac/e-cotacao/cotacoes-em-aberto/cotacoes-em-aberto.component';
import { ComponentesModule } from './componentes/componentes.module';
import { NgBootstrapComponentesModule } from './ng-bootstrap-componentes/ng-bootstrap-componentes.module';
import { NavegacaoSuperiorComponent } from './componentes/navegacao-superior/navegacao-superior.component';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticacaoInterceptadorService } from './autenticacao/autenticacao.interceptador.service';



@NgModule({
  declarations: [
    AppComponent,
    NavegacaoSuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebSacModule,
    ComponentesModule,
    NgBootstrapComponentesModule, AutenticacaoModule
  ],
  exports: [NavegacaoSuperiorComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptadorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
