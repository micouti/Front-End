/* Case Sensitive => reconhece letras MAIUSCULAS e minusculas (e diferencia elas)*/
// milena / Milena

//document seletor
//por tag: document.getElementsByTagName("h3")
//por classe: document.getElementsByClassName (".nomeClasse")
//por nome: document.getElementsByName ("email")
//por ID: document.getElementById("#idDoelemento")
//por seletor: document.querySelector("id/classe/nome")

//Variaveis:
//var nome = "milena // jeito antigo"
//let nome = "milena" //jeito atual - variaveis que poderão sofrer mudanças
//const nome = "milena" //jeito mais atual - variavel "fixa"

let digiteAlgo = document.querySelector ("#digiteAlgo");

function validaCampo() {
    if (digiteAlgo.value.length < 5) {
        digiteAlgo.style.color = "red"
        digiteAlgo.style.border = "1px solid red"
    } else {
        digiteAlgo.style.color = "green"
        digiteAlgo.style.border = "1px solid green"
    }
}

let modal = document.getElementById('myModal')
let btn = document.getElementById('myBtn')
let span = document.getElementsByClassName('close')[0]

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = 'none';
    }
}