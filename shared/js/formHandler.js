// shared/js/formHandler.js
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const jsonData = {};

      formData.forEach((value, key) => {
        jsonData[key] = value;
      });

      const isShareForm = form.id === "form-post";

      // Si es el formulario de compartir, convierte la imagen
      if (isShareForm && formData.get("imagen").name) {
        const file = formData.get("imagen");
        jsonData.imagen = await convertirADataURL(file);
      }

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(jsonData)
        });

        if (response.ok) {
          const result = await response.json();

          // Si es share.html, guardar en 'posts'
          if (isShareForm) {
            const publicaciones = JSON.parse(localStorage.getItem("posts")) || [];
            publicaciones.push(jsonData); // Guardamos lo que se envió, no lo que devuelve la API
            localStorage.setItem("posts", JSON.stringify(publicaciones));
          } else {
            localStorage.setItem(`${form.id || 'formulario'}-data`, JSON.stringify(result));
          }

          alert("Datos enviados exitosamente ✔️");
          form.reset();
        } else {
          alert("Error al enviar los datos ❌");
        }
      } catch (err) {
        console.error("Error en la petición:", err);
        alert("Error en la conexión ❌");
      }
    });
  });

  async function convertirADataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
});
