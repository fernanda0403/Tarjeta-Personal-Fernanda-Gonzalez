/* enlazar los elementos de HTML */

const toggleButton = document.getElementById("toggle-button");
const body = document.body;
const logo = document.getElementById("logo");

/* función para ejecutar un código */

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark")

  // Cambiamos el logo según el tema

  const isDark = body.classList.contains("dark"); // True - False

  logo.src = isDark ? "./assets/marca-grafica-dark.svg" : "./assets/marca-grafica.svg";
} );
