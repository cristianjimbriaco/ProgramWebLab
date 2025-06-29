// shared/js/injector.js
document.addEventListener("DOMContentLoaded", () => {
  const getBasePath = () => {
    const currentPath = window.location.pathname;

    if (currentPath.includes("/views/")) {
      return "../../shared/components/";
    } else {
      return "shared/components/";
    }
  };

  const base = getBasePath();

  const inject = async (selector, fileName) => {
    const container = document.querySelector(selector);
    if (!container) return;

    try {
      const res = await fetch(base + fileName);
      if (!res.ok) throw new Error("Archivo no encontrado");
      const html = await res.text();
      container.innerHTML = html;
    } catch (err) {
      console.error(`Error al cargar ${fileName}:`, err);
    }
  };

  inject("#header", "header.html");
  inject("#navbar", "navbar.html");
  inject("#footer", "footer.html");
});


