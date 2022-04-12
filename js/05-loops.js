/*  Estruturas Tradicionais:

While              -> Enquanto
do/while           -> Faça/Enquanto
for                -> Para  
*/


// Exemplo Loop While (Enquanto)
console.log("While");   

//Variavel de controle
let i = 1;

while (i <= 10) {
    console.log(`valor de contador:  ${i}`);
    i++;
}

console.log("------------------------------------");

console.log("Do/While");

let j = 1;  //Variavel de repetiçao

do{
    console.log(`J vale ${j}`);
    j++;
}while(j <=5);

console.log("----------------------------------------");

console.log("FOR");

for(let k = 1; k<=5; k++ ){
    console.log(`K vale ${k}`);
}

console.log("----------------------------------------");

console.log("Loop e Estrutura de Dados");


//ARRAY (Vetor)

let alunos = ["Eduardo", "Vagner" , "thalia" ,"Claudio", "Jessica"];

for(let i =0;i < 5;i++){
    console.log(alunos[i]);

}

console.log("--------------------------------------------");

console.log("Loops exclusivos JS");

//For/of: ótimos para ARRAY
for(let aluno of alunos ){
    console.log(aluno);
}

console.log("-----------------------------------------");

let livro = {
    titulo: "Senhor dos Anéis",
    ano: 1954 ,
    volumes: 3
};

//For/in
for(let dados in livro){
    console.log(livro[dados]);
}