var teclado = require("prompt-sync")();
var fahrenheit = parseInt(teclado("Digite quantos graus Fahrenheit: "));
var conversao = 5 / 9 * (fahrenheit - 32);
console.log("A temperatura em Celsius \u00E9 ".concat(conversao));
