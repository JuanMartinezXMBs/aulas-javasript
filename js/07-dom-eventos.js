"use strict";

/* Funções de seleção DOM

-getElementById()
Selecionar um elemento atraves de um ID.

-querySelector()
Seleciona UM elemento atraves de um seletor.

-querySelectorAll()

*/

/* Exemplos */

//Acessando o DOM
const subtitlo = document.getElementById("subtitulo-dom");
const desenho = document.querySelector("figure");
const descricao = document.querySelector("#descricao");

console.log(desenho);

const variosElementos = document.querySelectorAll("h3, a");

console.log(variosElementos);
console.log(variosElementos[1]);

//Modificando o DOM
const titulo = document.querySelector("h1");
titulo.textContent = "Olá JavaScript!";
titulo.style.textAlign = "center"; //CSS inline via JS
titulo.classList.add("destaque");

/* Selecionando links contidos na lista */
const linkReferencia = document.querySelectorAll("ul li a");
console.log(linkReferencia);

let quantidadeDeLinks = linkReferencia.length;

// for(let i = 0; i < quantidadeDeLinks; i++ ){
//     linkReferencia[i].setAttribute("target", "_blank");
// }

//------LOOP COM FOR USANDO COM ARRAYS---------
for(let link of linkReferencia){
    link.setAttribute("target","_blank");
}
//----------------------------------------------------------------------------------------//
/* Manipulação de eventos */
const pagina = document.querySelector("body");
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");


//ouvinte de evento
exemplo01.addEventListener("click", function(){
    pagina.style.fontFamily = "verdana";
    mensagem.textContent =  "Fonte atualizada";
    mensagem.style.backgroundColor = "yellow";
});












