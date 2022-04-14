// Exemplo 1
const subExemplo01 = document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem");

// Monitor de Eventos
subExemplo01.addEventListener("click", function () {
    msg.textContent = "Ola!!!!!!!!";
    msg.style.fontSize = "25px";
    subExemplo01.style.backgroundColor = "skyblue";
});

subExemplo01.addEventListener("dblclick", function () {
    msg.textContent = "";
});

// Exemplo 02: Modo Noturno

const ativar = document.querySelector("#noturno");
const pagina = document.querySelector("body");

ativar.addEventListener("click", function () {
    pagina.classList.toggle("modo-noturno");


    if (ativar.textContent == `Ativar`) {
        ativar.textContent = "Desativar"

    } else {
        ativar.textContent = "Ativar";
    }
})


// Exemplo 3: Simulação De Cadastro
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultado = document.querySelector("#resultados");

//Detectar o acionamento do formulario
//Obs : a Funçao dentro do listener é chamada de callback
formulario.addEventListener("submit", function (Event) {
    /* Anulando o comportamento padrao do navegador 
    (Redirecionar o formulário) */
    Event.preventDefault();

    // 1) Capturar os dados digitados nos campos
    let nome = campoNome.value;
    let Nota1 = parseFloat(campoNota1.value);
    let Nota2 = parseFloat(campoNota2.value);

    // 2) Calcular a Media das notas

    let media = (Nota1 + Nota2) / 2 ;

    let situacao
    if ( media >= 7) {
        situacao = "Aprovado"
      } else{
          situacao = ("reprovado")
      }
  
   
    // 3) Criando Elementos dinamicamente via JS

    // 3.1) Criar o Elemento/TAG

    let paragrafo = document.createElement("p")

    // 3.2) Montar elemento para TAG
    paragrafo.innerHTML = `<b>${nome}</b> - <i>${media}</i> - <b>${situacao}</b>`;
 
   

     // 3.3) Adicionar TAG/Conteúdo a div resultado
     divResultado.appendChild(paragrafo);
    
     /* Exercício
     1) Programe o necessario para determinar se o aluno esta aprovado ou reprovado criterio: média maior/igual a 7 aprovado,caso contrario reprove
     
     2) mostre a situaçao do alino junto com o nome e a media
     
     
     3) Desafio: Faça com que os cmapos do formulario se apaguem depois de usados*/

      campoNome.focus()

     console.log(paragrafo);
     this.reset(formulario);
});