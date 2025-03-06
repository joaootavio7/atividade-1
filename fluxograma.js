var teclado = require("prompt-sync")();
var idade = 0;
var salario = 0;
var total_pess_atend_condicao = 0;
var n_pess = 0; // número de pess;
var contador = 0;
do {
    idade = parseFloat(teclado("Digite a idade do funcionario ".concat(n_pess + 1, ": ")));
    salario = parseFloat(teclado("Digite o salario do funcionario ".concat(n_pess + 1, ": ")));
    if (idade < 30 && salario > 3000) {
        total_pess_atend_condicao++;
        n_pess++;
    }
    else {
        n_pess++;
    }
} while (n_pess < 7);
console.log("o total de pessoas \u00E9\u00B4".concat(n_pess));
