import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArmazenamentoLocalService {

  constructor() { }

  obterItem(key: string) {
    return window.localStorage.getItem(key);
  }

  definirItem(key: string, valor: string) {
    window.localStorage.setItem(key, valor);
  }

  removerItem(key: string) {
    window.localStorage.removeItem(key);
  }

  existeChave(key: string): boolean {
    return !!this.obterItem(key);
  }
}
