"use strict";

let alunos = [
    {
        nome: "JUAN",
        id: 1
    },
    {
        nome: "BARNABÉ",
        id: 2
    },
    {
        nome: "MATEUS",
        id: 3
    }

];

let contagem = alunos.length;

for(let i = 0; i <= contagem; i++){
    console.log(`Clientes: ${alunos[i].nome}`)
}