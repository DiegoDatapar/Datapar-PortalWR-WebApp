import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoPadraoComponent } from './cartao-padrao/cartao-padrao.component';
import { NavegacaoLateralComponent } from './navegacao-lateral/navegacao-lateral.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavegacaoSuperiorComponent } from './navegacao-superior/navegacao-superior.component';
import { CabecalhoSecaoComponent } from './cabecalho-secao/cabecalho-secao.component';

@NgModule({
  exports: [CartaoPadraoComponent, NavegacaoLateralComponent , CabecalhoSecaoComponent],
  declarations: [CartaoPadraoComponent, NavegacaoLateralComponent, CabecalhoSecaoComponent],
  imports: [
    CommonModule,
    HttpClientModule, FormsModule, RouterModule, ReactiveFormsModule // , MyNotifierModule
  ],
})
export class ComponentesModule { }
