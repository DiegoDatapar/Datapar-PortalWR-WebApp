import { ConfiguraApiService } from 'src/app/configuracoes/configura-api.services';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListarPaginadoService {

  constructor(private httpcliente: HttpClient, private configApi: ConfiguraApiService) {

  }

  Listar(api: string, pagatual: number, pagqtd: number, filtros: any, direcaoordenacao: string = '', campoordenacao: string = '') {
    let paramets = new HttpParams({});

    let pagini = (pagatual - 1) * pagqtd;

    paramets = paramets.set('PaginacaoInicio', pagini.toString()).set('PaginacaoQuantidade', pagqtd.toString())
    if (direcaoordenacao != '' && campoordenacao != '') {

      let asc = direcaoordenacao == 'asc' ? '1' : '2';
      paramets = paramets.set('Asc', asc).set('CampoAsc', campoordenacao);

    }

    if (filtros != undefined) {

      let keys = Object.keys(filtros);

      keys.forEach(p => {
        paramets = paramets.set(p, filtros[p]);
      });
    }

    return this.httpcliente.get<any>(
      `${this.configApi.Configuracoes().urlApi}${api}`, { params: paramets });
  }
}
