// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crear un array para almacenar nombres
let amigos = [];

// Función para agregar amigos
function agregarAmigo(){
    //Capturar el valor del campo de entrada
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido");
        return;
    }
    // Actualizar el array de amigos
    amigos.push(nombre);
    console.log(amigos);
    
    // Limpiar campo de entrada
    input.value = "";
    actualizarLista();
}

// Función para actualizar la lista de amigos
function actualizarLista(){
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // Crear elementos de lista <li>
        let elemento = document.createElement("li");
        elemento.textContent = amigos[i];

        // Agregar elementos a la lista
        lista.appendChild(elemento);
    }
}

// Función para sortear los amigos
function sortearAmigo(){
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el amigo sorteado
    document.getElementById("resultado").innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;

    // Ocultar la lista 
    document.getElementById("listaAmigos").innerHTML = "";
}