import { Estpro } from './Estpro';
import { Estfpg } from './Estfpg';
import { Rodcli } from './Rodcli';
import { Rodfab } from './Rodfab';
import { Estico } from './Estico';

export class Estfic {
    Codcot: number;
    Codprod: number;
    Codclifor: number;
    Numped: number;
    Vlruni: number;
    Vlrori: number;
    Datenv: Date;
    Datdev: Date;
    Preent: Date;
    Meddia: number;
    Codfpg: number;
    Datatu: Date;
    Usuatu: string;
    Situac: string;
    Observ: string;
    Vlrtot: number;
    Qtdofe: number;
    Unidad: string;
    Qtdemb: number;
    Qtduni: number;
}

export class EstficListagem {
        Codcot: number;
        Codprod: number;
        Datdev: Date;
        DescricaoFormaPagamento: string;
        Observ: string;
        ReferenciaProduto: string;
        Preent: Date;
        DescricaoProduto: string;
        Qtdofe: number;
        Quanti: number;
        Vlrtot: number;
        Vlruni: number;
        Vlrori: number;
        Codclifor: number;
        ObservacaoComprador: string;
        DescricaoFabricante: string;
        DescricaoFornecedor: string;
        Codfpg: number;
        FormaPagamento: Estfpg;
        NumeroLinha: number;
        Unidad: string;
        Qtdemb: number;
        Qtduni: number;
}

