

const contador = document.getElementById('contadorVisitas')
const btnReestablecer = document.getElementById('btnReestablecer')

let contadorVisitas =  parseInt(localStorage.getItem('contador')) || 0
contadorVisitas++;
localStorage.setItem("contador", contadorVisitas);

contador.textContent = localStorage.getItem("contador")
btnReestablecer.addEventListener("click", () => {
    localStorage.setItem("contador", 0);
    contador.textContent = localStorage.getItem("contador")
})