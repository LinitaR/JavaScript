//Hay 3 formas de inicializar un string
var primeraForma = "PrimeraForma";
var segundaForma = 'SegundaForma';
var terceraForma = `Esto es un template`;

//concatenacion
console.log(primeraForma + " " + segundaForma);
console.log(`${primeraForma} + ${primeraForma}`);

//Ventajas de un template
primeraForma = "Esto es un mensaje" + "\n" 
+ 'en varias lineas';
console.log(primeraForma);
terceraForma = `Esto es un mensaje
en varias lineas`;
console.log(terceraForma);

//Pasar un tipo de dato a un tipo de dato String
console.log(String(8));


//Obtener el tamaño de caracteres dentro de un string
console.log(primeraForma.length);

//Obtener un caracter en especial de una posicion
console.log(primeraForma.charAt(11));
console.log(primeraForma[11]);

//Comparar string - Lo hace comparando su valor ACSSI
/*
Comparar - ==
Comparando el valor
*/
console.log("8" == 8);
/*
Comparar - ===
Comparando primero el tipo y luego el valor
*/
console.log("8" === 8);

//Comparando cadenas de texto
// Colombia < argentina
console.log(`Colombia`.toUpperCase() < `argentina`.toUpperCase());

//uppercase=mayus lowercase=minusc

//Valores de escape
console.log("Hola a todos \"\'\\");