"use strict";

// Requisitos da escola para aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

// Resultados do aluno
let aluno = "jean";
let mediaFinal = 8;
let faltas = 1;
let resultado;

/* VERSÃO 1 */
/* Operador logico E (and) */
// if( mediaFinal >= mediaMinima && faltas <= limiteDeFaltas ){
//     resultado = "aprovado";
// } else {
//     resultado = "reprovado"
// }

/* VERSÃO 2 */
// if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
//     resultado = "aprovado";
// } else if (faltas > limiteDeFaltas){
//     resultado = "reprovado por faltas"
// } else {
//     resultado = "reprovado";
// }

/* VERSÃO 3 */
if(faltas > limiteDeFaltas){
    resultado = "reprovado por faltas";
} else if (mediaFinal >= mediaMinima){
    resultado = "aprovado";
} else {
    resultado = "reprovado";
}

console.log(`O aluno ${aluno} está ${resultado}`);
console.log(`Media do aluno: ${mediaFinal}`);
console.log(`Faltas do aluno: ${faltas}`);

console.log("-----------------------------");

/* Operador logico || (OR - OU) */
let diaDaSemana = "domingo";

if (diaDaSemana == "sábado" || diaDaSemana == "domingo") {
    console.log ("Final de semana 🙏");
} else {
    console.log ("Vá trabalhar!🏃‍♂️")
}