// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let inputAmigo = document.getElementById("amigo");
let ulAmigos = document.getElementById("listaAmigos");


function agregarAmigo() {
    if (inputAmigo.value == "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(inputAmigo.value);
        inputAmigo.value = "";
        //renderizarLista(amigos);
    }
}