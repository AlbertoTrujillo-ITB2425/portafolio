// Alternar entre modo oscuro y claro
const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
const body = document.body;

// Verificar si el usuario tiene preferencia de modo oscuro almacenada
const userPreference = localStorage.getItem('theme') || 'light';

// Aplicar el tema almacenado
if (userPreference === 'dark') {
    body.classList.add('dark');
    toggleDarkModeButton.textContent = "Modo Claro";
} else {
    body.classList.remove('dark');
    toggleDarkModeButton.textContent = "Modo Oscuro";
}

// Cambiar el tema al hacer clic en el botón
toggleDarkModeButton.addEventListener("click", function() {
    body.classList.toggle('dark');
    // Guardar la preferencia del usuario en el almacenamiento local
    if (body.classList.contains('dark')) {
        toggleDarkModeButton.textContent = "Modo Claro";
        localStorage.setItem('theme', 'dark');
    } else {
        toggleDarkModeButton.textContent = "Modo Oscuro";
        localStorage.setItem('theme', 'light');
    }
});
