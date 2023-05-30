var botoncodificar = document.querySelector(".btn-Codificar");
var botondecodificar = document.querySelector(".btn-decodificar");
var animado = document.querySelector(".contenedoranimado");
var contenedor = document.querySelector(".contenedor-textoparrafo");
var resultado = document.querySelector(".texto-resultado");

botoncodificar.onclick = codificar;
botondecodificar.onclick = decodificar;

function codificar() {
    ocultarAdelante();
    var cajatexto = recuperartexto();
    resultado.textContent = codificarTexto(cajatexto);
}

function decodificar() {
    ocultarAdelante();
    var cajatexto = recuperartexto();
    resultado.textContent = decodificarTexto(cajatexto);
}

function recuperartexto() {
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultarAdelante() {
    animado.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function codificarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            textoFinal += "ai";
        } else if (texto[i] === "e") {
            textoFinal += "enter";
        } else if (texto[i] === "i") {
            textoFinal += "imes";
        } else if (texto[i] === "o") {
            textoFinal += "ober";
        } else if (texto[i] === "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }

    return textoFinal;
}

function decodificarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            textoFinal += "a";
            i++;
        } else if (texto[i] === "e") {
            textoFinal += "e";
            i += 4;
        } else if (texto[i] === "i") {
            textoFinal += "i";
            i += 3;
        } else if (texto[i] === "o") {
            textoFinal += "o";
            i += 3;
        } else if (texto[i] === "u") {
            textoFinal += "u";
            i += 3;
        } else {
            textoFinal += texto[i];
        }
    }

    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido).then(() => {
        console.log("Texto copiado al portapapeles");
        alert("Texto copiado al portapapeles");
    }).catch((error) => {
        console.error("Error al copiar el texto: ", error);
        alert("Error al copiar el texto");
    });
});
