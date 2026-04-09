function mostrarCuestionario() {
  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("cuestionario").classList.remove("hidden");
}

function procesar() {

  document.getElementById("cuestionario").classList.add("hidden");
  document.getElementById("resultado").classList.remove("hidden");

  let hipotesis = document.getElementById("hipotesis").value;
  let problema = document.getElementById("problema").value;
  let solucion = document.getElementById("solucion").value;

  document.getElementById("out_propuesta").innerText =
    solucion || "Definir propuesta de valor clara";

  document.getElementById("out_actividades").innerText =
    "Validar hipótesis: " + (hipotesis || "Hipótesis no definida");

  document.getElementById("out_socios").innerText =
    "Aliados para resolver: " + (problema || "Problema no definido");

  let progreso = 0;
  let barra = document.getElementById("barra");

  let intervalo = setInterval(() => {
    progreso += 10;
    barra.style.width = progreso + "%";

    if (progreso >= 100) {
      clearInterval(intervalo);
      document.getElementById("contenido").classList.remove("hidden");
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