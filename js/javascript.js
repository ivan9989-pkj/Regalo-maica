const mensaje = document.getElementById("mensaje");
const frasesNo = ["Ya veo que no me querias", "Prefieres irte con la rubia verdad, bollera", "Ahora te quedas sin abrazos durante un mes"];
let indiceFrase = 0;

document.getElementById("btnSi").addEventListener("click", () => {
    mostrarMensaje("Ahora seremos una misma alma en diferentes cuerpos", 20000);
});

document.getElementById("btnNo").addEventListener("click", () => {
    mostrarMensaje(frasesNo[indiceFrase], 10000);
    indiceFrase = (indiceFrase + 1) % frasesNo.length;
});

function mostrarMensaje(texto, duracion) {
    mensaje.innerText = texto;
    mensaje.style.display = "block";
    setTimeout(() => {
        mensaje.style.display = "none";
    }, duracion);
}