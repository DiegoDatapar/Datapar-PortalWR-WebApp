import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaoPadraoComponent } from './cartao-padrao/cartao-padrao.component';
import { NavegacaoLateralComponent } from './navegacao-lateral/navegacao-lateral.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavegacaoSuperiorComponent } from './navegacao-superior/navegacao-superior.component';

@NgModule({
  exports: [CartaoPadraoComponent, NavegacaoLateralComponent , NavegacaoSuperiorComponent],
  declarations: [CartaoPadraoComponent, NavegacaoLateralComponent, NavegacaoSuperiorComponent],
  imports: [
    CommonModule,
    HttpClientModule, FormsModule, RouterModule, ReactiveFormsModule // , MyNotifierModule
  ],
})
export class ComponentesModule { }
