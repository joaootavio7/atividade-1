var teclado = require("prompt-sync")();
var celsius = parseInt(teclado("Digite quantos graus Celsius: "));
var conversao = (celsius * 9 / 5) + 32;
console.log("A temperatura em fahrenheit \u00E9 ".concat(conversao));
