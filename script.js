/* enlazar los elementos de HTML */

const toggleButton = document.getElementById("toggle-button");
const body = document.body;

/* función para ejecutar un código */

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark")
} )