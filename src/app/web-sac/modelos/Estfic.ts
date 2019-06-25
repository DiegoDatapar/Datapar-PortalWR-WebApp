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

    Produto: Estpro;
    FormaPagamento: Estfpg;
    //Fornecedor: Rodcli;
    Fabricante: Rodfab;
    ItensCotacao: Estico;

}

export class EstficListagem {
        Codcot: number;
        Codprod: number;
        DatDev: Date;
        DescricaoFormaPagamento: string;
        Observ: string;
        ReferenciaProduto: string;
        PreEnt: Date;
        DescricaoProduto: string;
        QtdOfe: number;
        Quanti: number;
        VlrTot: number;
        VlrUni: number;
        Codclifor: number;
        Unidad: string;
        ObservacaoComprador: string;
        DescricaoFabricante: string;
}

