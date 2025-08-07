const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-activa');
    toggleBtn.classList.toggle('abierto');
    toggleBtn.textContent = toggleBtn.classList.contains('abierto') ? '✖' : '☰';
});

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-activa');
        toggleBtn.classList.remove('abierto');
        toggleBtn.textContent = '☰';
    });
});

function toggleModoOscuro() {
    const body = document.body;
    const icono = document.getElementById('iconoModo');

    body.classList.toggle('modo-oscuro');

    if (body.classList.contains('modo-oscuro')) {
        icono.src = 'imagenes/dark_mode.svg';
        icono.alt = 'Icono de modo oscuro';
    } else {
        icono.src = 'imagenes/light_mode.svg';
        icono.alt = 'Icono de modo claro';
    }
}

document.getElementById('modoOscuroBtn').addEventListener('click', toggleModoOscuro);

