import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConfiguraApiService } from 'src/app/configuracoes/configura-api.services';


@Injectable({
  providedIn: 'root'
})
export class ListarPaginadoService {

  constructor(private httpcliente: HttpClient, private configuraApi: ConfiguraApiService) {

  }

  Listar(api: string, pagatual: number, pagqtd: number, filtros: any, direcaoordenacao: string = '', campoordenacao: string = '') {
    let parametros = new HttpParams({});

    let pagini = (pagatual - 1) * pagqtd;

    parametros = parametros.set('PaginacaoInicio', pagini.toString()).set('PaginacaoQuantidade', pagqtd.toString())
    if (direcaoordenacao != '' && campoordenacao != '') {

      const asc = direcaoordenacao == 'asc' ? '1' : '2';
      parametros = parametros.set('Asc', asc).set('CampoAsc', campoordenacao);

    }

    if (filtros != undefined) {

      let keys = Object.keys(filtros);

      keys.forEach(p => {
        parametros = parametros.set(p, filtros[p]);
      });
    }

    return this.httpcliente.get<any>(
      `${this.configuraApi.Configuracoes().urlApi}${api}`, { params: parametros });
  }
}
