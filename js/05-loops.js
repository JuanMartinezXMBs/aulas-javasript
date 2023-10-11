 /* Comandos de repetição
 Instruções para realizar ações por uma quantidade especifica de vezes. */

 /* Comandos Tradicionais: */
//  - While              -> ENQUANTO
//  - do/while           -> FAÇA/ENQUANTO
//  - for                -> PARA

// OBS.: Normalmento o Loop é controlado atraves de uma variavel contadora.

/* entendendo limitador de repetição "++" */
// let contador = 1;
// while (contador <= 10) {
//     console.log(`valor de contador: ${contador}`);
//     contador++; 
//}

// Exemplo do/While  (FAÇA/ENQUANTO)
let contador = 10;

do {
    console.log(`Conatdor vale: ${contador}`);
    contador++;
} while ( contador <= 3 );