// JAVA/MODO OSCURO 
function toggleOscuro() {
    document.body.classList.toggle('modo-oscuro')
    const btnOscuro = document.getElementById('btnOscuro')
    if (document.body.classList.contains('modo-oscuro')) {
        btnOscuro.textContent = '☀️ Modo claro'
    } else {
        btnOscuro.textContent = '🌑 Modo oscuro'
    }
}

// BOTON VOLVER ARRIBA
const btnArriba = document.getElementById('btnArriba')
if (btnArriba) {
    window.addEventListener('scroll', () => {
        btnArriba.style.display = window.scrollY > 300 ? 'block' : 'none'
    })
}