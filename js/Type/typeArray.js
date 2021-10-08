//Sintaxis -> var nombreArray = []
//var nombreArray = [valor1, valor2, valor3];
var arreglo = [1,2,3,4,5,6,7,8,9];

//Como le pido una posicion a un arreglo
//sintaxis -> nombreArray[posicion]
console.log(arreglo[6]);

//como le pido el tamaño a un arreglo
//Sintaxis -> nombreArray.length
console.log(arreglo.length);

//Como se le pide la ultima posicion de una 
//arreglo
console.log(arreglo[arreglo.length - 1]);


//Como añadimos un valor a un array
//en la ultima posicion
//sintaxis -> nombreArray.push(valor);
arreglo.push('11');
console.log('arreglo: ', arreglo);

//Como añadimos un valor a un array
//en la primera posicion
//sintaxis -> nombreArray.unshift(valor);
arreglo.unshift('11');
console.log('arreglo: ', arreglo);

//Como eliminamos la ultima posicion de un
//array
//Sintaxis -> nombreArray.pop();
arreglo.pop();
console.log('arreglo: ', arreglo);

//Como eliminamos la primera posicion de un
//array
//Sintaxis -> nombreArray.shift();
arreglo.shift();
console.log('arreglo: ', arreglo);

//Como le pedimos la posicion de un valor
//dentro de un arreglo
//Sintaxis -> nombreArray.indexOf(valor);
console.log(arreglo.indexOf('no existe'));

//Como copiamos un array
//Sintaxis -> var nuevoArray = nombreArray.slice();
var copiaArreglo = arreglo.slice();
console.log('copia arreglo: ', copiaArreglo);