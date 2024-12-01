// Dropdown de Ofertas (si se utiliza en algún momento)
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
    });
}

// Icono de Usuario
const userIcon = document.querySelector('.user-icon');
const userMenu = document.querySelector('.user-menu');
const closeUserMenuButton = document.querySelector('.user-menu .close-button');

// Mostrar/ocultar menú de usuario al hacer clic en el icono
if (userIcon && userMenu) {
    userIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que el clic cierre otros menús
        userMenu.classList.toggle('show'); // Mostrar/ocultar el menú
    });

    // Cerrar el menú de usuario al hacer clic en el botón de cerrar
    if (closeUserMenuButton) {
        closeUserMenuButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que se propaguen los eventos
            userMenu.classList.remove('show'); // Ocultar el menú
        });
    }

    // Evitar que el formulario cierre la pestaña emergente
    userMenu.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que el clic dentro del menú cierre la pestaña
    });
}

// Icono de Carrito
const cartIcon = document.querySelector('.cart-icon');
const cartMenu = document.querySelector('.cart-popup');
const closeCartMenuButton = document.querySelector('.close-cart-btn');

if (cartIcon && cartMenu) {
    cartIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        cartMenu.classList.toggle('show');
    });

    // Cerrar el menú del carrito al hacer clic en el botón de cerrar
    if (closeCartMenuButton) {
        closeCartMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            cartMenu.classList.remove('show');
        });
    }

    // Evitar que el clic dentro del carrito cierre la pestaña
    cartMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Icono de Configuración
const settingsIcon = document.querySelector('.settings-icon');
const settingsMenu = document.querySelector('.settings-menu');
const closeSettingsMenuButton = document.querySelector('.settings-menu .close-btn');

if (settingsIcon && settingsMenu) {
    settingsIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsMenu.classList.toggle('show');
    });

    // Cerrar el menú de configuración al hacer clic en el botón de cerrar
    if (closeSettingsMenuButton) {
        closeSettingsMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsMenu.classList.remove('show');
        });
    }

    // Evitar que el clic dentro de configuración cierre la pestaña
    settingsMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Cerrar los menús al hacer clic fuera de ellos
document.addEventListener('click', () => {
    document.querySelectorAll('.popup-menu, .cart-popup').forEach((menu) => {
        menu.classList.remove('show');
    });
});

// Cambiar Tema
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeToggle.textContent = document.body.classList.contains('dark-theme')
            ? 'Cambiar a Claro'
            : 'Cambiar a Oscuro';
    });
}

// Cambiar Tamaño de Letra
const fontSizeSelector = document.querySelector('.font-size-selector');
if (fontSizeSelector) {
    fontSizeSelector.addEventListener('change', (e) => {
        document.body.style.fontSize = e.target.value;
    });
}
