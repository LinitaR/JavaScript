/*
 Bucle
 For
*/
//For
//Sintaxis -> for(iterator; condition; end) {code}
//iterator -> declaracion de una variable y se usa para 
//inicializar la iteracion
//condition ->  Se ejecuta el <code> siempre y cuando 
//la condicion sea verdadera
//end -> una expresion final que se evalua cada vez que 
//se ejecuto una iteracion del bucle
//contador++ -> contador = contador + 1;
//contador+2 -> contador = contador + 2;
//contador-4 -> contador = contador - 4;
/*for(var contador = 1; contador <= 3; contador++) {
    console.log(contador);
}

var ciudades = ['Bucaramanga', 'Cali', 'Bogota', 'Valledupar', 'Barranquilla'];

//Por favor imprimir los valores de las posiciones pares
//de la siguiente forma
//'posicion <posicionArreglo> es par y su valor es <valorDelaPosicionDelArreglo>'
// y los valores de las posiciones impares
//de la siguiente forma
//'posicion <posicionArreglo> es impar y su valor es <valorDelaPosicionDelArreglo>'

for(var posicionTemporalCiudades = 0; posicionTemporalCiudades < ciudades.length; posicionTemporalCiudades++){
    if(posicionTemporalCiudades%2==0){
        console.log(`posicion ${posicionTemporalCiudades} es par y su valor es ${ciudades[posicionTemporalCiudades]}`)
    }
    else if (posicionTemporalCiudades%2==1){
        console.log(`posicion ${posicionTemporalCiudades} es impar y su valor es ${ciudades[posicionTemporalCiudades]}`)
    }
}

/*
Matriz
*/
var dosDimensiones3x3 = [[0,1,2], [3,4,5], [6,7,8]];
/*dosDimensiones3x3 [0][0]
dosDimensiones3x3 [1][1]
dosDimensiones3x3 [2][2]*/

var sumatoria = 0
for(var iteratorPrincipal = 0; iteratorPrincipal <= dosDimensiones3x3.length-1; iteratorPrincipal++){
    var matrizInternaTemporal = dosDimensiones3x3[iteratorPrincipal];
    for(var iteratorSecundario = 0; iteratorSecundario<= dosDimensiones3x3<=matrizInternaTemporal.length-1;iteratorSecundario++){
        if(iteratorPrincipal==iteratorSecundario){
            sumatoria=sumatoria+dosDimensiones3x3[iteratorPrincipal][iteratorSecundario]; 
        }
    }
    for(var iteratorTerciario = matrizInternaTemporal.length-1; iteratorTerciario>=0; iteratorTerciario--){
        if(iteratorPrincipal+iteratorTerciario==dosDimensiones3x3.length-1){
            sumatoria=sumatoria+dosDimensiones3x3[iteratorPrincipal][iteratorTerciario]; 
        }
    }
}
console.log(sumatoria);

/*
dosDimensiones3x3[0][2]
dosDimensiones3x3[1][1]
dosDimensiones3x3[2][0]
*/


//Solucion de Leonardo
var sumatoria = 0;
for(var iterador = 0; iterador <= dosDimensiones3x3.length-1; iterador++) {
    sumatoria += dosDimensiones3x3[iterador][iterador];
    sumatoria += dosDimensiones3x3[iterador][(dosDimensiones3x3.length-1) - iterador];
}
console.log(sumatoria);