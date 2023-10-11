"use strict"; 
 
 /* Comandos de repetição
 Instruções para realizar ações por uma quantidade especifica de vezes. */

 /* Comandos Tradicionais: */
//  - While              -> ENQUANTO
//  - do/while           -> FAÇA/ENQUANTO
//  - for                -> PARA

// OBS.: Normalmento o Loop é controlado atraves de uma variavel contadora.

//-----------------------------------------------------------------------

/* entendendo limitador de repetição "++" */
// let contador = 1;
// while (contador <= 10) {
//     console.log(`valor de contador: ${contador}`);
//     contador++; 
//}

//-----------------------------------------------------------------------
//OBS Normalmente variaveis de controles de repetição são chamas de "i, j ou k"

// Exemplo do/While  (FAÇA/ENQUANTO)
// let i = 1;
// do {
//     console.log(`Conatdor vale: ${contador}`);
//     contador++;
// } while ( contador <= 3 );

//----------------------------------------------------------------------

// Exemplo FOR (PARA)
// for( let i = 1; i <= 10; i++ ){
//     console.log(`Contador vale: ${i}`);
// }

//loop com array
let clientes = ["Pedro","Andre","TiagÃO","João","Mateus","TIAGO","Filipe"];

// console.log(clientes.length); - contagem

//Cache/Memória da QTD. de elementos do array
let quantidade = clientes.length

for( let i = 0; i < quantidade; i++ )
    {console.log(`Clientes: ${clientes[i]}`);
}

