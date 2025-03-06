let teclado = require(`prompt-sync`)();

let celsius: number = parseInt(teclado (`Digite quantos graus Celsius: `));

let conversao: number = (celsius * 9/5) + 32

console.log(`A temperatura em fahrenheit é ${conversao}`)


 