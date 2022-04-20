//Acessando elemento usando jQuery
const titulo = $("h1");

//Mundando o texto do Elemento
titulo.text("Ola Seja Bem-Vindo a jQuery")

//CSS Via jQuery

//titulo.css("color","blue")
titulo.css({
    "color": "blue",
    "font-size": "30px",
    "text-align": "Center"
})

titulo.on("click",function(){
    $("Body").css("background-color", "Yellow")
    $("h2").text("Clicou!!")
/* 
    titulo.fadeOut() */
})
titulo.on("dblclick",function(){
    $("body").css("background-color","white")
})