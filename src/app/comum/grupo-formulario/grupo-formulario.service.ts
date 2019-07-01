import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GrupoFormularioService {

  constructor() { }

  atualizaValor(form: FormGroup, propriedade: string, objeto: any) {

    const valor = objeto != null ? objeto[propriedade] || objeto : null;
    const key: string = propriedade;
    const formField = {};
    formField[key] = valor;
    form.patchValue(formField);

  }
}
