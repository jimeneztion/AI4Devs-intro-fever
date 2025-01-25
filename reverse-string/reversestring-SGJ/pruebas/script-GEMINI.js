// script.js
function invertirTexto() {
  const textoOriginal = document.getElementById("texto").value;
  if (textoOriginal.trim() === "") {
    alert("Por favor, ingresa un texto");
    return;
  }

  const textoInvertido = textoOriginal.split("").reverse().join("");
  document.getElementById("resultado").textContent = textoInvertido;
}

function copiarResultado() {
  const textoInvertido = document.getElementById("resultado");
  textoInvertido.select();
  document.execCommand("copy");
  alert("¡Texto copiado al portapapeles!");
}
