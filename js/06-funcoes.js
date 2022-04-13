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

/* function soma(valor1, valor2) {
let total = valor1 + valor2;
return total;
    
} */

//Versao 2 Sintaxe ARROW Function (FUNÇÃO SETA/FLECHA)
const soma = (valor1,valor2) => {
    let total = valor1 + valor2;
    return total;
};

//ARROW Function com retorno implicito
const soma1 = (valor1,valor2) => valor1 + valor2

linha()
console.log(soma(10,5) );
console.log(soma(100,50) );

//Versao 1: Usando function 

/* function dobra(numero) {
    let resultado = numero * 2;
    return resultado;
} */

/* function dobra(numero) {
    return numero * 2;
}
 */

// Segunda versao : usando ARROW Function

/* const dobra = (numero) => {
    let total = numero * 2;
    return total;
}
 */

// ARROW Function Simplificadas

/*  const dobra = (numero) => {
     return numero * 2
 } */

 // como so temos 1 parametro podemos tirar os parentes ()
 const dobra = numero => numero * 2 


linha()
console.log(dobra(10));
console.log(dobra(150));

