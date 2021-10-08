//Hoisting
//ECMAScript 2015 - ES6
//Referirse al contexto de ejecuion de JavaScript - (fase de creacion y ejecuacion)
//fase de creacion -> Variables y las funciones deben ser movidas al principio de los archivos, pero esto en realidad no ocurre
//fase de ejecuacion -> Las declaraciones de variables y funciones se almacenan en memoria.
//funciones declarativas
console.log(suma(2, 3));

function suma(sumando1, sumando2) {
    return sumando1 + sumando2;
}

//expresiones de funciones
//console.log(resta(2, 3));

let resta = function(restando1, restando2) {
    return restando1 - restando2;
}

console.log(numero);

let numero = 5;