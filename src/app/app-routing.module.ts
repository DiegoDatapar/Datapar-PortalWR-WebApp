import { CotacoesEmAbertoComponent } from './web-sac/e-cotacao/cotacoes-em-aberto/cotacoes-em-aberto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: 'ecotacao/cotacoesemaberto',
      component: CotacoesEmAbertoComponent
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}