// shared/js/mostrarPublicaciones.js
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("publicaciones");
  if (!contenedor) return;

  const publicaciones = JSON.parse(localStorage.getItem("posts")) || [];

  publicaciones.reverse().forEach(pub => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4";

    col.innerHTML = `
      <div class="card bg-dark text-white h-100 shadow">
        ${pub.imagen ? `<img src="${pub.imagen}" class="card-img-top" alt="Imagen subida por ${pub.autor}">` : ""}
        <div class="card-body">
          <h5 class="card-title">@${pub.autor}</h5>
          <p class="card-text">${pub.mensaje}</p>
        </div>
      </div>
    `;

    contenedor.appendChild(col);
  });
});
