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