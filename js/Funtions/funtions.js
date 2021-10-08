//variables de funciones
//Creacion Sintaxis -> var nombreFuncion = function(parametros?) {code}
//Invocacion Sintaxis -> nombreFuncion(parametros?)
var funcion = function() {
    console.log('Hola a todos');
}
funcion();

var funcionConParametros = function(nombre, apellido) {
    console.log(`Bienvenido ${nombre} ${apellido}`);
}
funcionConParametros('Adolfo');

//funciones declarativas
//Creacion Sintaxis -> function nombreFuncion(parametros?) {code}
//Invocacion Sintaxis -> nombreFuncion(parametros?)
function funcionDos() {
    console.log('Mi nombre es Gustavo Garcia');
}
funcionDos();

function division(dividendo, divisor) {
    console.log(dividendo/divisor);
}
division(2/0);

//Las funciones tienen dos tipos de retorno
//Void que no retornan nada
//Return que retornan un valor de cualquier tipo y utiliza la palabra reservada return
function multiplicacion(multiplicando1, multiplicando2) {
    return multiplicando1 * multiplicando2;
}
var resultadoMultiplicacion = multiplicacion(2, 3);
console.log(resultadoMultiplicacion);