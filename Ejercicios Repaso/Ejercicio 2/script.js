// Create an Array
const numbers = [];
let newnumber = 0;
for (let i = 0; i < 100; i++) {
    newnumber = Math.floor(Math.random() * 100);
    numbers.push(newnumber);
}

newnumber = Math.floor(Math.random() * 100);
alert("Elemento nº "+ newnumber +"  =  "+  numbers[newnumber]);
newnumber = Math.floor(Math.random() * 100);
alert("Elemento nº "+ newnumber +"  =  "+  numbers[newnumber]);
newnumber = Math.floor(Math.random() * 100);
alert("Elemento nº "+ newnumber +"  =  "+  numbers[newnumber]);
newnumber = Math.floor(Math.random() * 100);
alert("Elemento nº "+ newnumber +"  =  "+  numbers[newnumber]);

document.getElementById('btn').addEventListener('click', () => {
    document.getElementById('greeting').textContent = 'You clicked!';
});