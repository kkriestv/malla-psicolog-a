document.addEventListener("DOMContentLoaded", function () {
  const ciclos = document.querySelectorAll(".ciclo");

  ciclos.forEach((ciclo, index) => {
    const cursos = ciclo.querySelectorAll("li");

    // Agrega evento de tachado a cada curso
    cursos.forEach(curso => {
      curso.addEventListener("click", () => {
        curso.classList.toggle("completado");
        verificarCiclo(index);
      });
    });

    // Bloquea todos menos el primero al inicio
    if (index !== 0) {
      ciclo.classList.add("bloqueado");
      ciclo.style.opacity = "0.5";
      ciclo.style.pointerEvents = "none";
    }
  });

  function verificarCiclo(i) {
    const cicloActual = ciclos[i];
    const cursos = cicloActual.querySelectorAll("li");
    const todosCompletados = Array.from(cursos).every(c => c.classList.contains("completado"));

    if (todosCompletados && i + 1 < ciclos.length) {
      const siguiente = ciclos[i + 1];
      siguiente.classList.remove("bloqueado");
      siguiente.style.opacity = "1";
      siguiente.style.pointerEvents = "auto";
    }
  }
});

function mostrar(el) {
  const lista = el.querySelector(".cursos");
  if (!el.classList.contains("bloqueado")) {
    lista.style.display = lista.style.display === "block" ? "none" : "block";
  }
}
