/* Funções (ou metodos) de Acesso/Seleção ao DOM

-getElementById   -> Seleciona UM Elemento atraves do id
-querySelector    -> Seleciona UM Elemento através de um Seletor
-querySelectorALL -> Seleciona VARÍOS Elemento através de  Seletor */

// Exemplos
/* const titulo = document.getElementById("titulo-principal"); */

const titulo = document.querySelector("#titulo-principal");
const subtitulos = document.querySelectorAll("h2")

console.log(titulo);
console.log(subtitulos);
console.log(subtitulos[2]);
 
//Leitura do Conteúdo:
console.log(titulo.textContent);
console.log(subtitulos[1].textContent);

//Alteraçao do conteúdo
titulo.textContent = "Ola DOM, Meu velho amigo.";
subtitulos[0].innerHTML = "<i> Aprendendo DOM </i>" 

//Manipulando CSS via JS

// 1) Inline 
const pagina = document.querySelector("body");
pagina.style.backgroundColor = "skyblue"
pagina.style.fontFamily = "arial"
pagina.style.margin = 0



// 2) classe 
const primeiroItem = document.querySelector("#lista-editores li:first-child");
console.log(primeiroItem);

primeiroItem.classList.add("destaque-item");