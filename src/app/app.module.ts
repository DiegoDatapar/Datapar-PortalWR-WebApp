import { ComponentesModule } from './componentes/componentes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotacoesEmAbertoComponent } from './web-sac/e-cotacao/cotacoes-em-aberto/cotacoes-em-aberto.component';


@NgModule({
  declarations: [
    AppComponent,
    CotacoesEmAbertoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
