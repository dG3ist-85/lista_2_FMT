const prompt = require("prompt-sync")();
numeros = [] ;

for(let i = 0; i < 5; i++) {
    num = prompt("Insira um número: ");
    numeros.push(num);
    console.log(`${i + 1}º numero: ${numeros[i]}`);
}
console.log(numeros)