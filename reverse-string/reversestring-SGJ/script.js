const invertButton = document.getElementById("invertButton");
const copyButton = document.getElementById("copyButton");
const textInput = document.getElementById("textInput");
const result = document.getElementById("result");
const error = document.getElementById("error");

invertButton.addEventListener("click", () => {
  const inputText = textInput.value.trim();

  if (inputText === "") {
    error.textContent = "Por favor, ingresa un texto.";
    result.textContent = "";
    return;
  }

  error.textContent = "";
  const invertedText = inputText.split("").reverse().join("");
  result.textContent = `Texto invertido: ${invertedText}`;
});

copyButton.addEventListener("click", () => {
  const textToCopy = result.textContent.replace("Texto invertido: ", "").trim();

  if (textToCopy === "") {
    error.textContent =
      "No hay texto para copiar. Por favor, invierte un texto primero.";
    return;
  }

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      error.textContent = "";
      alert("Texto copiado al portapapeles.");
    })
    .catch((err) => {
      error.textContent = "Hubo un error al copiar el texto.";
    });
});
