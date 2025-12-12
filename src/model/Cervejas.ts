import { Bebidas } from "./Bebidas"

export class Cervejas extends Bebidas {

    private _tamanho: number;

    constructor(id: number, alcoolica: boolean, tipo: number, quantidade: number, tamanho: number) {
        super(id, alcoolica, tipo, quantidade);
        this._tamanho = tamanho;

}

    public get tamanho() {
        return this._tamanho;
    }

    public set tamanho(tamanho: number) {
        this._tamanho = tamanho;
    }

    public retirar(valor: number): boolean {
        super.retirar();
    }
    
      public acrescentar(): {
        super.acrescentar();
    }

    public visualizar(): {
        super.visualizar()
    }
