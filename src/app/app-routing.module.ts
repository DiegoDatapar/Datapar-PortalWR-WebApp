import { CotacoesEmAbertoComponent } from './web-sac/e-cotacao/cotacoes-em-aberto/cotacoes-em-aberto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntradaComponent } from './autenticacao/entrada/entrada.component';
import { AutenticacaoGuardiaoService } from './autenticacao/autenticacao.guardiao.service';
import { PaginaInicialComponent } from './portal-wr/pagina-inicial/pagina-inicial.component';
import { ItensCotacaoComponent } from './web-sac/e-cotacao/cotacoes-em-aberto/itens-cotacao/itens-cotacao.component';

const routes: Routes = [
  {
    path: 'login',
    component: EntradaComponent
  },
  {
      path: 'ecotacao/cotacoesemaberto',
      component: CotacoesEmAbertoComponent
  },
  {
      path: 'ecotacao/itensdacotacao/:id',
      component: ItensCotacaoComponent
  },
    {
        path: '',
        component: PaginaInicialComponent,
        canActivate: [AutenticacaoGuardiaoService]
    }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}