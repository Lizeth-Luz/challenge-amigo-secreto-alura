// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para guardar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // 1.Capturar el valor del input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // 2. Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // 3. Agregar al array
    amigos.push(nombre);

    // (Opcional) Mostrar en consola para verificar
    console.log(amigos);

    // 4. Limpiar el campo de entrada
    input.value = "";
}
function mostrarAmigos() {
    // 5. Obtener el elemento <ul> o <ol> donde mostraremos la lista
    let lista = document.getElementById("listaAmigos");

    // 6. Limpiar la lista antes de volver a llenarla
    lista.innerHTML = "";

    // 7. Recorrer el arreglo amigos y crear un <li> por cada nombre
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    // 8. Validar que el array no esté vacío
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // 9. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 10. Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // 11. Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}
