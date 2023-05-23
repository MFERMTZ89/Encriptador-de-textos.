const textArea = document.querySelector(".text-Area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
  
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

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


const botonCopiar = document.querySelector(".btn-copiar");

botonCopiar.addEventListener("click",btnCopiar)

function btnCopiar() {
   
    mensaje.select();
    mensaje.setSelectionRange(0, mensaje.value.length);
    document.execCommand("copy");
}

