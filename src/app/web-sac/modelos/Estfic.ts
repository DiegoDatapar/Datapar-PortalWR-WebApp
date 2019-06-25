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
        Codclifor: number;
        Unidad: string;
        ObservacaoComprador: string;
        DescricaoFabricante: string;
        Codfpg: number;
}

