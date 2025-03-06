let teclado = require (`prompt-sync`)();

let lUm: number = parseInt(teclado(`Digite o valor do lado um: `));
let lDois: number = parseInt(teclado(`Digite o valor do lado dois: `));

let area: number = (lUm * lDois);

console.log(`A area do quadrado calculando ${lUm} x ${lDois} = ${area}`);