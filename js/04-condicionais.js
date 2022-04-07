/* Estruturas condicionais
if (se), else(senão), else if (senão se) 

operadores relacionais (Usados com condicionais)

>  maior que 
<  menor que 
>= maior ou igual
<= menor ou igual
== igualdade
!= diferente      */

// Exemplo 1 : Condicional simples (IF)

let numero = 10;

if (numero > 0) {
    console.log(`${numero} é Maior que zero`)
}


//Exemplo 2 : condicional Composta (If/else)
let aluno = "João";
let nota1 = 8;
let nota2 = 7;
let media = (nota1+nota2)/2;

console.log(`aluno:${aluno}`);
console.log(`Notas:${nota1} e ${nota2}`);
console.log(`Média:${media.toFixed(2)}`);

let situacao;
if (media >= 7 ) {situacao = "Aprovado";} 

else{
    situacao = "Reprovado";
}


/* Exemplo 3 : Condicional encadeada (If,ElSE IF, ELSE ) */

let desempenho;
if (media < 3) {
    desempenho = "Péssimo";
}
else if ( media < 5) {
    desempenho = "ruim";
}
else if (media < 7){
    desempenho = "regular";
}
else if (media < 9) {
    desempenho = "bom";
}
else {
    desempenho = "otímo";
}
console.log(desempenho);