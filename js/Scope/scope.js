//scope, ambito, alcance
var variable = 5;
//console.log(variable);

//De acuerdo al bloque de codigo que lo contiene - local
for(let contador = 0; contador < 10; contador++) {
    console.log(contador);
}

console.log(contador);

//De acuerdo a la funcion que lo contiene - Global
for(var index = 0; index < 10; index++) {
    console.log(index);
}

function otroEjemplo() {
    var index = 0;
    console.log(index);
    function otroEjemplo() {
        var i = 1;
        console.log(index);
    }

    otroEjemplo();
}

otroEjemplo();

console.log(index);