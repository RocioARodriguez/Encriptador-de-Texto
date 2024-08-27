const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function botónEncriptar(){ //acá llamo a la función encriptar
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""; //esto limpiará el campo de texto en donde escribe el usuario
    mensaje.style.backgroundImage = "none" //esto limpiará la imágen cuando se encriptó el texto
}


function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase ()

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) //con replaceAll sustituimos todo y con replace sustituimos de uno en uno


        }

    }
    return stringEncriptado
}

//console.table(matrizCodigo) para probar en la consola lo sacamos del comentario

function botónDesencriptar(){ //acá llamo a la función encriptar
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = ""; //esto limpiará el campo de texto en donde escribe el usuario
    
}


function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase ()

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]) //con replaceAll sustituimos todo y con replace sustituimos de uno en uno


        }

    }
    return stringDesencriptado
}

/*Función para copiar el texto al portapapeles
document.getElementById("botonCopiar").onclick = function() {
    const texto = document.getElementById("textoSalida").textContent;
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado al portapapeles");
    }, function() {
        alert("Hubo un error al copiar el texto");
    });
}; */

//Función para copiar el texto al portapapeles
document.getElementById("botónCopiar").onclick = function() {
    const texto = document.querySelector(".mensaje").value;
    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado al portapapeles");
    }, function() {
        alert("Hubo un error al copiar el texto");
    });
};

