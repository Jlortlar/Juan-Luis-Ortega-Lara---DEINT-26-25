// Create an Array

// Create an Array
let ObjPersona = {nombre:"Paco", annoNacimiento: 1990, hijos:["Pedro", "Pablo", "Pepo"]};
let ObjCoche= {modelo:"Feo", color: "blanco", cilindrada: 1000};
alert ("F12 para abrir la consola");
console.log(ObjCoche);
console.log(ObjPersona);
console.table(ObjPersona.hijos);


document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('greeting').textContent = 'You clicked!';
});