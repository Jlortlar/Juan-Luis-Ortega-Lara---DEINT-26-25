// Create an Array
const numbers = []; //Creamos un array vacío
let newnumber = 0;
//Rellenar el Array
for (let i = 0; i < 100; i++) { //Realizamos lo siguiente 100 veces
    newnumber = Math.floor(Math.random() * 100); 
    //cogemos un número aleatorio del 0 al 100  
    numbers.push(newnumber);
    //añadimos el número al array
}

//Mostrar por consola la tabla de contenidos
console.table(numbers);

//Escoger cuatro elementos
for (let i = 0; i < 4; i++) {
    newnumber = Math.floor(Math.random() * 100);
    //cogemos un número aleatorio del 0 al 100  
    alert("Elemento nº "+ newnumber +"  =  "+  numbers[newnumber]);
    //mostramos por pantalla el elemento escogido
}


document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('greeting').textContent = 'You clicked!';
});