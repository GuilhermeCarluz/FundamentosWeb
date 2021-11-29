/*
Case sensitive = reconhece letras maiusculas e minusculas
por tag: getElementByIdTagName()
por Id: getElementeById()
por nome: getElementsyName()
por classe: getElementsByClassName
por seletor: querySelector()
*/

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
  let txtNome = document.querySelector("#txtNome");
  if (nome.value.length <= 3) {
    txtNome.innerHTML = "Nome inválido";
    txtNome.style.color = "red";
  } else {
    txtNome.innerHTML = "Nome válido";
    txtNome.style.color = "green";
    nomeOk = true
  }
}
function validaEmail() {
  let txtEmail = document.querySelector("#txtEmail");
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    txtEmail.innerHTML = "E-mail inválido";
    txtEmail.style.color = "red";
  } else {
    txtEmail.innerHTML = "E-mail válido";
    txtEmail.style.color = "green";
    emailOk = true
  }
}
function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto");
    if (assunto.value.length >= 100){   
        txtAssunto.innerHTML = "O texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.color = "red"
    } else {
        txtAssunto.style.display = "None"
        assuntoOk = true
    }
}
function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso!")
    } else {
        alert ("Preencha o formulário corretamente.")
    }
}
function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}
function mapaNormal(){
    mapa.style.height = "250px"
    mapa.style.width = "400px"
}
