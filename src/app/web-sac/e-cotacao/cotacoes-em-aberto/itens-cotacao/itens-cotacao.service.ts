import { Injectable } from '@angular/core';
import { ConfiguraApiService } from 'src/app/configuracoes/configura-api.services';
import { EstficListagem, Estfic } from 'src/app/web-sac/modelos/Estfic';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItensCotacaoService {

  urlApi: string = `${this.config.Configuracoes().urlApi}Estfic/`;

  constructor(private config: ConfiguraApiService, private httpcliente: HttpClient) {

  }

  Listar(Codcot: number) {
    return this.httpcliente.get<EstficListagem[]>(`${this.urlApi}${Codcot}`);
  }

  Obter(Codcot: number, Codprod: number, Codclifor: number) {
    return this.httpcliente.get<EstficListagem[]>(`${this.urlApi}${Codcot}/${Codprod}/${Codclifor}`);
  }

  Salvar(item: Estfic) {
    return this.httpcliente.post<Estfic>(this.urlApi, item);
  }
}
