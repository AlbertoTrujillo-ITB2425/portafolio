// Variables globales
const body = document.body;
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');

// Almacenamos el estado del modo oscuro
const checkDarkMode = () => {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        enableDarkMode(); // Si está habilitado, activa el modo oscuro
    } else {
        disableDarkMode(); // Si no está habilitado, desactiva el modo oscuro
    }
};

// Activar el modo oscuro
const enableDarkMode = () => {
    body.classList.add('dark'); // Añade la clase dark al body
    darkModeIcon.classList.remove('fa-moon'); // Remueve el ícono de luna
    darkModeIcon.classList.add('fa-sun'); // Añade el ícono de sol
    localStorage.setItem('dark-mode', 'enabled'); // Guarda la preferencia en el localStorage
};

// Desactivar el modo oscuro
const disableDarkMode = () => {
    body.classList.remove('dark'); // Remueve la clase dark
    darkModeIcon.classList.remove('fa-sun'); // Remueve el ícono de sol
    darkModeIcon.classList.add('fa-moon'); // Añade el ícono de luna
    localStorage.removeItem('dark-mode'); // Remueve la preferencia del localStorage
};

// Alternar el modo oscuro al hacer clic en el botón
darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        disableDarkMode(); // Si está en modo oscuro, lo desactiva
    } else {
        enableDarkMode(); // Si está en modo claro, lo activa
    }
});

// Verificar el estado al cargar la página
checkDarkMode();
