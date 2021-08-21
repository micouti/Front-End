let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
  let txt = document.querySelector("#textNome");
  if (nome.value.length <= 3) {
    txt.innerHTML = "Nome Inválido";
    txt.style.color = "red";
  } else {
    txt.innerHTML = "Nome Válido";
    txt.style.color = "green";
    let nomeOk = true;
  }
}

function validaEmail() {
  let txtEmail = document.querySelector("#textEmail");

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-mail válido";
    txtEmail.style.color = "green";
    let emailOk = true
  }
}

function validaAssunto() {
  let txtAssunto = document.querySelector('#textAssunto')

  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = 'Texto é muito grande, digite no máxio 100 caracteres'
    txtAssunto.style.color = 'red' 
    txtAssunto.style.display = 'block' 
  } else {
    txtAssunto.style.display = 'none'
    let assuntoOk = true
  }
}
function enviar() {
  if(nomeOk == true && emailOk == true && assuntoOk == true) {
    alert ('Formulário enviado com sucesso!')
  } else {
    alert ('Preencha o formulário corretamente antes de enviar...')
  }
}

function mapaZoom() {
  mapa.style.width = '800px'
  mapa.style.height = '600px'
}

function mapaNormal(){
  mapa.style.width = '400px'
  mapa.style.height = '300px'
}