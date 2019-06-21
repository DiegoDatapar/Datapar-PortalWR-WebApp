import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Configuracao } from './configuracao';

@Injectable({
  providedIn: 'root'
})
export class ConfiguraApiService {

  constructor() { }

  Configuracoes(): Configuracao {

    const conf = new Configuracao();
    conf.urlApi = environment.apiUrl;

    return conf;

  }
}
