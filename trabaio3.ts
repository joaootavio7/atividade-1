let teclado = require(`prompt-sync`)();

let fahrenheit: number = parseInt(teclado (`Digite quantos graus Fahrenheit: `));

let conversao: number = 5/9 * (fahrenheit - 32)

console.log(`A temperatura em Celsius é ${conversao}`)