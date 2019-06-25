
export class ConfiguracaoTabela {


    label: string;
    binding: string;
    tamanhocoluna: string;
    bindingfiltro: string;
    bindingfiltro2: string;
    pipe: PipeEnum;
    tipo: TipoEnum;

// tslint:disable-next-line: max-line-length
    constructor(label: string, binding: string, tamanhocoluna: string = '', bindingfiltro: string = '', pipe: PipeEnum = null, tipo: TipoEnum = TipoEnum.texto, bindingfiltro2: string = '') {
        this.label = label;
        this.binding = binding;
        this.bindingfiltro = bindingfiltro != '' ? bindingfiltro : binding;
        this.bindingfiltro2 = bindingfiltro2;
        this.tamanhocoluna = tamanhocoluna;
        this.tipo = tipo;
        this.pipe = pipe;
    }
}

export enum TipoEnum {
    texto,
    data,
    numerico
}
export enum PipeEnum {
    data = 'data',
    datahora = 'datahora',
    hora = 'hora',
    moeda = 'moeda'
}


