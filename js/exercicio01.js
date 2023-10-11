/* Habilitando o modo estrito do JS */

"use strict";

let nota01 = 7;
let nota02 = 7;

let media = (nota01 + nota02) / 2;
let mensagem;

if (media >= 7){
    mensagem = "Aprovado";
} else if(media >= 5){
    mensagem = "Recuperação";
}else {
    mensagem = "Reprovado";
}

console.log(`o aluno está: ${mensagem}`);

console.log(`--------------------------------------------------------`);

let ponto = 0;
let pontolevados = 1;

let soma = (ponto + pontolevados);
let mensagemDetran;

console.log(soma);

if (soma >= 15) {
    mensagemDetran = "sua Carteira Nacional de Habilitação (CNH) está caçada! procure uma agência mais proxima e regularizar sua situação!";
}
else if (soma >= 13) {
    mensagemDetran = "sua Carteira Nacional de Habilitação (CNH) está sendo caçada!";
}
else if (soma >= 10) {
    mensagemDetran =  "tome mais cuidado com a sua direção, você pode ter a sua CNH caçada!";
}
else if (soma >= 7) {
    mensagemDetran = "tome mais cuidado!";
} else {
    mensagemDetran = "por enquanto ta tudo sob controle.";
}

console.log(`Detran: ${mensagemDetran}`)