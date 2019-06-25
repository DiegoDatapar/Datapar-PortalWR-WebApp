import { ConfiguracaoTabela } from 'src/app/comum/modelos/configuracoes-tabela';
export interface IConfiguracoesBuscaAvancada {
    formatter: Function;
    configsBinding: ConfiguracaoTabela[];
}