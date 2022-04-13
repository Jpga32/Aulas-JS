// Exemplo 1
const subExemplo01 = document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem");

// Monitor de Eventos
subExemplo01.addEventListener("click", function () {
   msg.textContent = "Ola!!!!!!!!";
   msg.style.fontSize = "25px";
   subExemplo01.style.backgroundColor = "skyblue";
});

subExemplo01.addEventListener("dblclick", function(){
    msg.textContent = "" ;
});

// Exemplo 02: Modo Noturno

const ativar = document.querySelector("#noturno");
const pagina = document.querySelector("body");

ativar.addEventListener("click",function(){
    pagina.classList.toggle("modo-noturno");

})