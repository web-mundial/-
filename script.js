const startButton = document.getElementById('startButton');
const trollButton = document.getElementById('trollButton');
const trollSection = document.getElementById('trollSection');
const trollAudio = document.getElementById('trollAudio');

// Al hacer clic en "Entrar a la promo", reproducir el audio y forzar el volumen máximo
startButton.addEventListener('click', () => {
    trollAudio.volume = 1.0; // Volumen máximo forzado
    trollAudio.play(); // Iniciar el audio
    startButton.style.display = 'none'; // Ocultar el botón "Entrar a la promo"
    trollSection.style.display = 'block'; // Mostrar la sección troll
});

// El botón de "Detener sonido" está deshabilitado para el troleo
trollButton.addEventListener('click', () => {
    // Este evento no hará nada porque el botón está deshabilitado
    alert('¡Sigue sonando! No puedes detenerlo 😈');
});
