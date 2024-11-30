const enlaces = document.querySelectorAll("a");

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (event) => {
    event.preventDefault();

    const div = enlace.closest("div");

    const contenido = div.querySelector("p");

    if (contenido.style.display === "none") {
      contenido.style.display = "block"; 
      enlace.textContent = "Ocultar contenidos"; 
    } else {
      contenido.style.display = "none"; 
      enlace.textContent = "Mostrar contenidos"; 
    }
  });
});
