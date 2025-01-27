// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let indiceSeleccionado;
let amigoSeleccionado;
let inputAmigo = document.getElementById("amigo");
let ulAmigos = document.getElementById("listaAmigos");
let resultadoSorteo = document.getElementById("resultado");

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

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("La lista se encuentra vacia");
    } else {
        indiceSeleccionado = Math.floor(Math.random() * amigos.length);
        amigoSeleccionado = amigos[indiceSeleccionado];
        resultadoSorteo.innerHTML = `El amigo secreto es: ${amigoSeleccionado}`;
    }
}