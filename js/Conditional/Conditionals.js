/*
* Conditional
*/
var numero = 5;

//if
//Siempre lo va a evaluar
//Sintaxis -> if(condition) { code }
if(numero)
    console.log('El numero es diferente 0 y -0');

//else if
//Lo evalua siempre y cuando la condicion anterior no se cumpla
//Sintaxis -> if(condition) {code} else if(condition2) {code2} ... else if(coditionN) {codeN}
if(numero < 5)
    console.log('El numero es mayor a 5');

else if(numero > 5)
    console.log('El numero es mayor a 5');

//else
//Lo evalua siempre y cuando la condicion anteriores
//no se cumplan
//Sintaxis -> if(condition) {code} else {code}
if(numero < 5)
    console.log('El numero es menor a 5');

else
    console.log('El numero es mayor a 5');

//COmbinaciones entre if, else if, else
if(numero < 5)
    console.log('El numero es mayor a 5');

else if(numero > 5)
    console.log('El numero es mayor a 5');

if(numero < 5) 
    console.log('El numero es mayor a 5');

else
    console.log('El numero es igual a 5');

//Ejercicio que se le ocurrio al profesor
//para solo imprimir la linea 61
if(numero) {
    if(!numero)
        console.log('hola');

    if(numero) {
        if(!numero)
            console.log('hola');

        else {
            if(numero) 
                console.log('imprima solo este');

            else
                console.log('hola');
        }
    }
} 