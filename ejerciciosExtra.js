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
*/
/*

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




*/
