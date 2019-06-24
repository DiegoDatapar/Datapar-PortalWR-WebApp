import { Component } from '@angular/core';
import { AutenticacaoService } from './autenticacao/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Datapar-PortalWR-WebApp';

  constructor(public autenticacaoService: AutenticacaoService) {

  }

}
