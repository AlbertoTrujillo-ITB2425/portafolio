// Obtener el botón para cambiar el modo oscuro
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body; // Usamos `document.body` para manipular el body directamente

// Función para activar el modo oscuro
const activateDarkMode = () => {
    // Añadir las clases para modo oscuro globalmente
    body.classList.add("dark", "text-white", "bg-gray-900");

    // Aplicar fondo y texto blanco a todas las secciones, excepto proyectos y habilidades
    document.querySelectorAll("section").forEach((section, index) => {
        // Alternar el fondo de las secciones con tonos oscuros
        section.classList.add(index % 2 === 0 ? "bg-gray-900" : "bg-gray-800");
        section.classList.remove("bg-white", "bg-gray-50");

        // Asegurarse de que todo el texto dentro de la sección sea blanco, excepto proyectos y habilidades
        section.querySelectorAll("*").forEach(element => {
            // Cambiar texto a blanco, pero no para proyectos ni habilidades
            if (section.id !== "proyectos" && section.id !== "habilidades") {
                element.classList.add("text-white");
                element.classList.remove("text-black", "text-gray-700", "text-gray-600");
            }
            // Añadir tamaño de texto `text-lg` a todo el contenido
            element.classList.add("text-lg");
        });

        // Solo cambiar el título de habilidades a blanco
        if (section.id === "habilidades") {
            const habilidadTitle = section.querySelector("h2"); // Asegúrate de que el título sea h2 o ajusta la etiqueta
            if (habilidadTitle) {
                habilidadTitle.classList.add("text-white");
                habilidadTitle.classList.remove("text-black");
            }
        }
    });

    // Cambiar el icono del modo oscuro a sol
    const darkModeIcon = document.getElementById("dark-mode-icon");
    darkModeIcon.classList.replace("fa-moon", "fa-sun");

    // Corregir el tamaño de los iconos en "Sobre mí"
    const sobreMiIcons = document.querySelectorAll(".sobre-mi-icon");
    sobreMiIcons.forEach(icon => {
        icon.classList.remove("text-sm");  // Eliminar el tamaño pequeño
        icon.classList.add("text-xl"); // Volver a un tamaño más grande
    });

    // Guardar la preferencia en localStorage
    localStorage.setItem("dark-mode", "enabled");
};

// Función para desactivar el modo oscuro
const deactivateDarkMode = () => {
    // Eliminar las clases de modo oscuro globalmente
    body.classList.remove("dark", "text-white", "bg-gray-900");

    // Restablecer el fondo blanco en las secciones
    document.querySelectorAll("section").forEach((section, index) => {
        section.classList.add(index % 2 === 0 ? "bg-white" : "bg-gray-50");
        section.classList.remove("bg-gray-900", "bg-gray-800");

        // Asegurarse de que todo el texto dentro de la sección sea negro
        section.querySelectorAll("*").forEach(element => {
            // Dejar el color del texto original en proyectos y habilidades
            if (section.id !== "proyectos" && section.id !== "habilidades") {
                element.classList.add("text-black");
                element.classList.remove("text-white");
            }
            // Añadir tamaño de texto `text-lg` a todo el contenido
            element.classList.add("text-lg");
        });

        // Solo cambiar el título de habilidades a negro
        if (section.id === "habilidades") {
            const habilidadTitle = section.querySelector("h2"); // Asegúrate de que el título sea h2 o ajusta la etiqueta
            if (habilidadTitle) {
                habilidadTitle.classList.add("text-black");
                habilidadTitle.classList.remove("text-white");
            }
        }
    });

    // Cambiar el icono del modo oscuro a luna
    const darkModeIcon = document.getElementById("dark-mode-icon");
    darkModeIcon.classList.replace("fa-sun", "fa-moon");

    // Corregir el tamaño de los iconos en "Sobre mí"
    const sobreMiIcons = document.querySelectorAll(".sobre-mi-icon");
    sobreMiIcons.forEach(icon => {
        icon.classList.remove("text-sm");  // Eliminar el tamaño pequeño
        icon.classList.add("text-xl"); // Volver a un tamaño más grande
    });

    // Guardar la preferencia en localStorage
    localStorage.setItem("dark-mode", "disabled");
};

// Comprobar si ya hay preferencia guardada en localStorage
const currentMode = localStorage.getItem("dark-mode");
if (currentMode === "enabled") {
    activateDarkMode(); // Si está habilitado, activar el modo oscuro
} else {
    deactivateDarkMode(); // Si no está habilitado, mantener el modo claro
}

// Escuchar el evento de clic en el botón de cambio de modo
darkModeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
        deactivateDarkMode(); // Desactivar el modo oscuro
    } else {
        activateDarkMode(); // Activar el modo oscuro
    }
});
