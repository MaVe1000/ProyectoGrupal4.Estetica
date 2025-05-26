const toggle = document.getElementById("menu-sanguche");
const nav = document.getElementById("menu-superior");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

function filtrarServicios() {
  const rubro = document.getElementById("rubro").value;
  document.querySelectorAll(".servicio-card").forEach((card) => {
    if (rubro === "todos" || card.classList.contains(rubro)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function filtrarTablaServicios() {
  const rubroListado = document.getElementById("rubroListado").value;
  const rows = document.querySelectorAll("table tr");

  rows.forEach((row, index) => {
    if (
      index === 0 || // Siempre mostrar la primera fila (encabezado)
      rubroListado === "todoListado" ||
      row.cells[0].textContent.toLowerCase() === rubroListado
    ) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}
