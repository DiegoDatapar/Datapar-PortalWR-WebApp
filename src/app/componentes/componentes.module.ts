import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoPadraoComponent } from './cartao-padrao/cartao-padrao.component';
import { NavegacaoLateralComponent } from './navegacao-lateral/navegacao-lateral.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavegacaoSuperiorComponent } from './navegacao-superior/navegacao-superior.component';
import { CabecalhoSecaoComponent } from './cabecalho-secao/cabecalho-secao.component';
import { LimpaObjetosComponent } from './limpa-objetos/limpa-objetos.component';
import { BotaoGenericoComponent } from './botao-generico/botao-generico.component';
import { NotificacoesModule } from '../notificacoes/notificacoes.module';
import { ContainerCamposComponent } from './container-campos/container-campos.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { CaixaSelecaoComponent } from './caixa-selecao/caixa-selecao.component';
import { SeparadorComponent } from './separador/separador.component';
import { TabelaDadosSimplesComponent } from './tabela-dados-simples/tabela-dados-simples.component';

@NgModule({
  exports: [CartaoPadraoComponent,
    NavegacaoLateralComponent,
    CabecalhoSecaoComponent,
    LimpaObjetosComponent,
    BotaoGenericoComponent,
    ContainerCamposComponent,
    FormularioCadastroComponent,
    CaixaSelecaoComponent,
    SeparadorComponent,
    TabelaDadosSimplesComponent],
  declarations: [CartaoPadraoComponent,
    NavegacaoLateralComponent,
    CabecalhoSecaoComponent,
    LimpaObjetosComponent,
    BotaoGenericoComponent,
    ContainerCamposComponent,
    FormularioCadastroComponent,
    CaixaSelecaoComponent,
    SeparadorComponent,
    TabelaDadosSimplesComponent],
  imports: [
    CommonModule,
    HttpClientModule, FormsModule, RouterModule, ReactiveFormsModule, NotificacoesModule
  ],
})
export class ComponentesModule { }
