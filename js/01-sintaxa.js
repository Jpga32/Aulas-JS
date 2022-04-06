// comando de saída de dados
console.log("Olá JavaScript!");

// Variavel pode mudar
let ano = 2022;


// Constante nunca muda
const aluno= "João"


console.log(ano);
console.log(aluno);

console.log(ano,aluno);

/* Operações Matematicas
+ (adiçao)
- (Subtraçao)
/ (Divisao)
* (multiplicação) */

let preco = 1500;
let desconto = 250;
let precoFinal = preco - desconto;

console.log (preco,desconto,precoFinal);

let produto = " Tv Led";

// A TV Led Custava 1500 Reais


/* 1 forma (Tradicional) */
console.log("A"+produto+" Custava "+preco+" Reais. ");

//2 Forma (Moderna)
console.log(`A${produto} Custava ${preco} Reais`)
