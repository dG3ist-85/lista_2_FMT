const prompt = require("prompt-sync")();
numeros = [] ;

for(let i = 0; i < 5; i++) {
    num = parseInt(prompt("Insira um número: "));
    numeros.push(num);
    
    console.log(`${i + 1}º numero: ${numeros[i]}`);
}
console.log(numeros)

const soma = numeros.reduce((total, numero) =>  total + numero, 0); // retorna um numero
console.log(`A soma dos números é: ${soma}`); // retorna uma string
console.log(soma); // retorna um numero
// o método reduce() percorre cada número do array, somando-os ao acumulador(total). O parâmetro 
// 'total' começa com o valor inicial de 0, e a cada iteração, o valor atual do array é adicionado 
// a ele.
// total = 0;
// for(let i = 0; i < 5; i++) {
//     total += numeros[i];
// }
// console.log(total) 