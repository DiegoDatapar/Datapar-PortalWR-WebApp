import { ConfiguraApiService } from 'src/app/configuracoes/configura-api.services';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});

@Injectable({
  providedIn: 'root'
})

export class AutoCompleteService {

  constructor(private httpclient: HttpClient, private configApi: ConfiguraApiService) { }

  Filtrar(filtro: string, api: string) {
    return this.httpclient.get(`${this.configApi.Configuracoes().urlApi}${api}`, { params: PARAMS.set('q', filtro) })
    .pipe(map(response => response));
  }
}
