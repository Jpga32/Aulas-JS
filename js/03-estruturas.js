/* Estrutura de Dados no JavaScript

ARRAY (Vetor)
Lista de dados Indexados*/

let alunos = ["João", "Thiago", "Marília", "vagner" ]

// Acessando o aluno armazenado no índice 1
console.log(alunos[1]); //Thiago
console.log(alunos[3]); //Vagner

//Da forma abaixo conseguimos ver os indices (números)
console.log(alunos);

/*Exercício Array:
1-) Crie um Array Conteudo os seguintes dados de uma 
pessoa:
- Nome e Sobrenome
- Idade
- Cidade 
- Estado

2-) Mostre uma frase no console conforme o exemplo abaixo:
Fulano silva e da cidade de são paulo e tem 20 anos */

let informacoes = ["Joao pedro Honorato",17,"São Paulo","Sp"]

console.log (`Meu nome e ${informacoes[0]} tenho ${informacoes[1]} anos moro em ${informacoes[2]} ` )

console.log("----------------------------------------------------")

/* OBJETO
lista de dados Não-Indexados */

let filme = {
    // Propriedade: Valor
    titulo:"Homem Aranha",
    ano: 2021,
    genero: "Ação/Ficção",
    classificaçao: 16

};

console.log(filme.titulo);
console.log(filme.genero);
console.log(filme.ano);
console.log(filme.classificaçao)
console.log(
    `${filme.titulo} e um ${filme.genero} que foi lançado no ano de ${filme.ano} com a classificaçao para +${filme.classificaçao}`
)


/* Exercício de objeto
1-) crie um novo objeto contendo os dados (ficticios)
de um pedido de uma loja virtual. Exemplo:
- Data do pedido
- produto comprado
- Preço do pedido
- Prazo da entrega
*/

/* 2-) Mostre uma frase contendo as seguintes informaçoes
o produto XYZ foi comprado em 07/04/2022 com entrega em 7 dias uteis */

let MundoTec = {
    produto:"Mouse",
    data:"17/05/2022",
    prazo: "7 Dias Uteis",
    valor:"R$ 99.99"
}
console.log(
    `O ${MundoTec.produto} que foi comprado no dia ${MundoTec.data} sera entrega em ${MundoTec.prazo} com valor final de ${MundoTec.valor}`
)


