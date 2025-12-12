export class Bebidas {

    private _id: number;
    private _alcoolica: boolean;
    private _tipo: number;
    private _quantidade: number;

    constructor(id: number, alcoolica: boolean, tipo: number, quantidade: number) {
        this._id = id
        this._alcoolica = alcoolica
        this._tipo = tipo
        this._quantidade = quantidade
    }

    public set id(id: number) {
        this._id = id;
    }

    public get alcoolica() {
        return this._alcoolica;
    }

    public get tipo() {
        return this._tipo;
    }

    public get quantidade() {
        return this._quantidade;
    }

    public set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }

    public retirar(valor: number): boolean {
        if (this._quantidade < valor) {
            console.log("\n Não há esta quantidade no estoque!");
            return false;
        }

        this._quantidade = this._quantidade - valor;
        return true;
    }

    public acrescentar(valor: number): void{
        this._quantidade = this._quantidade + valor;
    }

    public visualizar(): void{
        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Refrigerante Sem Açúcar";
                break;
            case 2:
                tipo = "Refrigerante Com Açúcar";
                break;
            case 3:
                tipo = "Água Com Gás";
                break;
            case 4:
                tipo = "Água Sem Gás";
                break;
            case 5:
                tipo = "Água de Côco";
                break;
            case 6:
                tipo = "Cervejas";
                break;
            case 7:
                tipo = "Drinks";
                break;
        }

        console.log("\n\n*****************************************************************")
        console.log("Dados do Produto:");
        console.log("\n\n*****************************************************************")
        console.log("id: " + this._id);
        console.log("Quantidade: " + this._quantidade);
        console.log("Tipo da bebida: " + this._tipo);
        console.log("Contém alcool: " + this._alcoolica);
        
    }

}
