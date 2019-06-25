import { Estfpg } from './Estfpg';
import { Injectable } from '@angular/core';
import { ConfiguracaoTabela } from 'src/app/comum/modelos/configuracoes-tabela';
import { IConfiguracoesBuscaAvancada } from 'src/app/comum/interfaces/configuracoes-busca-avancada';

@Injectable({
    providedIn: 'root'
})
export class EstfpgConfiguracoes implements IConfiguracoesBuscaAvancada {
    configsBinding: ConfiguracaoTabela[] =
        [
            new ConfiguracaoTabela('Descrição', 'Descri', '4'),
            new ConfiguracaoTabela('Prioridade', 'Priori', '2'),
            new ConfiguracaoTabela('Qtd Parcelas', 'Qtdpar', '2')
        ];
// tslint:disable-next-line: ban-types
    formatter: Function = (x: Estfpg) => x.Descri;

}
