/* 
1.- Crea un programa que cuente los numeros pares hasta 12.
2.- Crea un programa que realice por consola 2 a la 10.
3.- Crea un programa que realice un triangulo.
#
##
###
####
#####
######

4.- FIZZ BUZZ
Escribe un programa que imprima por consola los números del 1 al 100, pero con dos excepciones:

Para los números divisibles por 3, imprime "Fizz" en lugar del número.
Para los números divisibles por 5 (y no por 3), imprime "Buzz" en lugar del número.
Para los números que son divisibles tanto por 3 como por 5, imprime "FizzBuzz".

5.- TABLERO DE AJEDREZ
Crea un programa que genere por consola una representación de un tablero de ajedrez utilizando caracteres.
El tablero debe ser de 8x8, alternando espacios en blanco y caracteres (por ejemplo, "#")
para representar las casillas blancas y negras. La salida debe ser algo así:
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

 6.- Crea un programa que te de la secuencia de Fibonacci hasta el número 100.
 7.- Crea un programa que identifique si una palabra es un anagrama de otra.
 8.- Genera un progama para convertir de Celsius a Fahrenheit, de Celsius a kelvin y viceversa.
*/
//-------------------------  Ejercicio 1 -----------------------------------------------------------------------------------------

// Crea un programa que cuente los numeros pares hasta 12
/*
let numero = 0;
while(numero<=12){
    console.log(numero)
    numero = numero+2;
}
*/
/*
for(let numero = 0; numero <=12; numero = numero + 2){
console.log(numero);
}
*/
//--------------------------  Ejercicio 2 ---------------------------------------------------------------------------------------

// Crea un programa que realice por consola 2 a la 10 (resultado 1024)
/*
let resultado = 1;
let contador = 0;
while (contador < 10){
    console.log(resultado) // Este console.log te muestra el trabajo que está realizando tu ciclo while
    resultado = resultado * 2;
    contador = contador + 1;
} 

console.log(resultado); // Este es el resultado final del bucle


let resultado = 1; 
for (let contador = 0; contador < 10; contador = contador + 1){
resultado = resultado * 2;
console.log(resultado)

}
console.log(resultado)
*/

/*
//--------------------------  Ejercicio 3 ---------------------------------------------------------------------------------------

Crea un programa que realice un triangulo.
#
##
###
####
#####
######
let piramide = "#";

let contador = 0;
while (contador < 12) {
    console.log(piramide);
    piramide += "#";
    contador = contador + 1;
}

*/
//----------------------------------------------------  Ejercicio 4 -----------------------------------------------------------------------------------------------------------
/* 

FIZZ BUZZ
Escribe un programa que imprima por consola los números del 1 al 100, pero con dos excepciones:

Para los números divisibles por 3, imprime "Fizz" en lugar del número.
Para los números divisibles por 5 (y no por 3), imprime "Buzz" en lugar del número.
Para los números que son divisibles tanto por 3 como por 5, imprime "FizzBuzz".


for (let contador = 1; contador <= 100; contador++) {
    if (contador % 3 === 0 && contador % 5 === 0) {
        console.log("FizzBuzz");
    } else if (contador % 3 === 0) {
        console.log("Fizz");
    } else if (contador % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(contador);
    }
}
            
*/


//-------------------------  Ejercicio 5 -----------------------------------------------------------------------------------------
/*
TABLERO DE AJEDREZ
Crea un programa que genere por consola una representación de un tablero de ajedrez utilizando caracteres.
El tablero debe ser de 8x8, alternando espacios en blanco y caracteres (por ejemplo, "#")
para representar las casillas blancas y negras. La salida debe ser algo así:
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
//-------------------------  Ejercicio 6 -----------------------------------------------------------------------------------------
 6.- Crea un programa que te de la secuencia de Fibonacci hasta el número 100.
 //-------------------------  Ejercicio 7 -----------------------------------------------------------------------------------------
 7.- Crea un programa que identifique si una palabra es un anagrama de otra.
//-------------------------  Ejercicio 7 -----------------------------------------------------------------------------------------




 /// Solución 1
*/
/*

let size = 8;
let board = '';

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);

*/
/*
----------------------------------------  Ejercicio 6 -----------------------------------------------------------------------------------------------------------

Crea un programa que te de la secuencia de Fibonacci hasta el número 100.

*/
/*
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(100));

*/