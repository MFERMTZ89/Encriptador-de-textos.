function btnEncriptar() {
    const textArea = document.getElementById("textArea");
    const mensaje = document.getElementById("mensaje");
  
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

const botonEncriptar = document.getElementById("btnEncriptar");
botonEncriptar.addEventListener("click", btnEncriptar);

function encriptar(stringEncriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptar.includes(matrizCodigo[i][0])) {
            stringEncriptar = stringEncriptar.replace(new RegExp(matrizCodigo[i][0], "g"), matrizCodigo[i][1]);
        }
    }
  
    return stringEncriptar;
}

function btnDesencriptar() {
    const mensaje = document.getElementById("mensaje");
    const textArea = document.getElementById("textArea");

    const textoDesencriptado = desencriptar(mensaje.value);
    textArea.value = textoDesencriptado;
    mensaje.value = "";
    textArea.style.backgroundImage = "none";
}
function desencriptar(stringDesencriptar) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptar.includes(matrizCodigo[i][1])) {
            stringDesencriptar = stringDesencriptar.replace(new RegExp(matrizCodigo[i][1], "g"), matrizCodigo[i][0]);
        }
    }

    return stringDesencriptar;
}
function btnCopiar() {
    const mensaje = document.getElementById("mensaje");
  
    mensaje.select();
    mensaje.setSelectionRange(0, mensaje.value.length);
    document.execCommand("copy");
}
const botonCopiar = document.getElementById("btnCopiar");
botonCopiar.addEventListener("click", btnCopiar);
