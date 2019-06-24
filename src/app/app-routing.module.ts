import { CotacoesEmAbertoComponent } from './web-sac/e-cotacao/cotacoes-em-aberto/cotacoes-em-aberto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntradaComponent } from './autenticacao/entrada/entrada.component';
import { AutenticacaoGuardiaoService } from './autenticacao/autenticacao.guardiao.service';

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
        path: '',
        component: CotacoesEmAbertoComponent,
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