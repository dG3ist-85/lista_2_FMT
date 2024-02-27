const prompt = require("prompt-sync")();

let array = []

for(let i = 0; i < 3; i++) {
    menu = prompt("Qual fruta você deseja comprar ? ");
    array.push(menu);

}
const newArray = array[1];
console.log(array);
console.log(newArray);

array.push('Abacaxi');
// array.splice(3, 0, "Abacaxi");
// console.log(array);
array.splice(0, 1);
console.log(array);
