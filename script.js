function mostrarCuestionario() {
  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("cuestionario").classList.remove("hidden");
}

function procesar() {

  document.getElementById("cuestionario").classList.add("hidden");
  document.getElementById("resultado").classList.remove("hidden");

  let progreso = 0;
  let barra = document.getElementById("barra");

  let intervalo = setInterval(() => {
    progreso += 10;
    barra.style.width = progreso + "%";

    if (progreso >= 100) {
      clearInterval(intervalo);
    }
  }, 200);
}
function irAResultados() {

  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSeavbJumqAzK0jd10roLrfw-6Cahvw-6sPSoWxsQol6ifzaQA/viewform",
    "_blank"
  );
procesar();
}