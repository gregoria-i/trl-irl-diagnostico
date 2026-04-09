function mostrarCuestionario() {
  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("cuestionario").classList.remove("hidden");
}

function irAResultados() {

  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeavbJumqAzK0jd10roLrfw-6Cahvw-6sPSoWxsQol6ifzaQA/viewform",
    "_blank"
  );

  // 2. Cambiar a pantalla 3
  document.getElementById("cuestionario").classList.add("hidden");
  document.getElementById("resultado").classList.remove("hidden");

  // 3. Animación
  let progreso = 0;
  let barra = document.getElementById("barra");

  let intervalo = setInterval(() => {
    progreso += 20;
    barra.style.width = progreso + "%";

    if (progreso >= 100) {
      clearInterval(intervalo);

      document.getElementById("contenido").classList.remove("hidden");
    }
  }, 100);
}