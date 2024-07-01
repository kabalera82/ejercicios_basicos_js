/*
---------------------------------------------  Ejercicio 7  -----------------------------------------------------------------

Completa esta función para que, al recibir dos números por argumento,
 te devuelva por consola el más alto de los dos.

 */

var numero1 = parseInt(prompt("Introduce un número:"));
var numero2 = parseInt(prompt("Introduce un número:"));

function imprimirElNumeroMasAlto(numero1, numero2) {
    if (numero1 > numero2) {
      console.log(numero1);      
    } else if (numero2 > numero1) {
      console.log(numero2);
    }   else {
        console.log("Ambos números son iguales.");
    }
  };

imprimirElNumeroMasAlto(numero1, numero2);

  

