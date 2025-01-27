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
        renderizarLista(amigos);
    }
}

function renderizarLista(amigos) {
    ulAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        // creo el elemento li
        let li = document.createElement("li");
        // creo un texto para agregar al li
        let newContentLi = document.createTextNode(amigos[i]);
        // agrego el texto al li
        li.appendChild(newContentLi);
        // agrego el li al ul
        ulAmigos.appendChild(li);
    }
    console.log(ulAmigos);
}