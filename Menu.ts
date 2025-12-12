import readlinesync = require("readline-sync");
import {Bebidas} from './src/model/Bebidas';
export function main() {
    
    let opcao: number;

    const estoque: Bebidas = new Bebidas(1, true, 6, 5);
    estoque.visualizar();
    estoque.retirar(20);
    estoque.acrescentar(15);


    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("              ESTOQUE BAR DE TODES                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Lançar Produto                       ");
        console.log("            2 - Listar Todos os Produtos             ");
        console.log("            3 - Buscar Item por id                   ");
        console.log("            4 - Atualizar Estoque                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            6 - Retirar Quantidade do Estoque        ");
        console.log("            7 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("O que deseja fazer? ");
        opcao = readlinesync.questionInt("");

        if (opcao == 7) {
            console.log("\nObrigada por manter o estoque organizado");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nLançar Produto\n\n");

                keyPress() 
                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");

                break;
            case 3:
                console.log("\n\nBusca item - por id\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar o Estoque\n\n");

                break;
            case 5:
                console.log("\n\nDeletar um Produto\n\n");

                break;
            case 6:
                console.log("Quantidade Retirada do Estoque!");
            
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por Ana Beatriz Monteiro:         ");
    console.log("Empresa Desenvolva Aqui - abeatrizbmonteiro@gmail.com  ");
    console.log("github.com/conteudoGeneration"                          );
    console.log("*******************************************************");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();