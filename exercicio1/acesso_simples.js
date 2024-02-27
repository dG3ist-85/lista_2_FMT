const prompt = require("prompt-sync")();
let array = []

for(let i = 0; i < 3; i++) {
    menu = prompt("Qual fruta você deseja comprar? ")
    array.push(menu);

}
const newArray = array.slice(1, 2); //retorna uma nova array com o valor selecionado
const newestArray= array[1];//retorna somente o valor selecionado
console.log(array);
console.log(newArray);
console.log(newestArray);