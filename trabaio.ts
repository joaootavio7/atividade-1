let teclado = require(`prompt-sync`)();


 console.log(`-----------------------`);
 console.log(`-    Calculo media    -`);
 console.log(`-----------------------`);



 let n1: number = parseInt(teclado (`Digite a nota N1: `));
 let n2: number = parseInt(teclado(`Digite a nota N2:  `));
 let n3: number = parseInt(teclado (`Digite a nota N3: `));
 let n4: number = parseInt(teclado(`Digite a nota N4:  `));
 let n5: number = parseInt(teclado (`Digite a nota N5: `));
 let n6: number = parseInt(teclado(`Digite a nota N6:  `));
 let n7: number = parseInt(teclado (`Digite a nota N7: `));
 let n8: number = parseInt(teclado(`Digite a nota N8:  `));
 let n9: number = parseInt(teclado (`Digite a nota N9: `));
 let n10: number = parseInt(teclado(`Digite a nota N10:  `));
 
 
 let media: number = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) /2;
 
 console.log(` A media desses números é ${media}`);