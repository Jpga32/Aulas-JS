`use strict; ` //Modo Estrito

/* Funções são blocos de codigo que podem ser executados e reaproveitados em praticamente qualquer parte de sua aplicação.

usar funções tambem e uma forma de separar a lógica e organizar melhor sua programção.*/


// Sintaxe Tradicional
function linha() {
    console.log("-------------------");
}

let curso = "Programador Web";
let escola = "senac";
let ano = 2022;

console.log(`Curso: ${curso}`);
linha()
console.log(`Escola: ${escola}`);
linha()
console.log(`Ano: ${ano}`);


            //Parâmetros ou Argumentos

function soma(valor1, valor2) {
let total = valor1 + valor2;
return total;
    
}

console.log(soma(10,5) );
