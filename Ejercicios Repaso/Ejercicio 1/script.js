let logtext = "Hola, soy log";
let errortext = "Hola, soy error";
let infotext = "Hola, soy info";
let debugtext = "Hola, soy debug";
console.log(logtext);
console.error(errortext);
console.info(infotext);
console.debug(debugtext);

alert("Recuerda pulsar F12 para ver mensajes en consola");

document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('greeting').textContent = 'You clicked!';
});