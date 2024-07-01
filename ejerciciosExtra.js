/* 
1.- Crea un programa que cuente los numeros pares hasta 12.
2.- Crea un programa que realice por consola 2 a la 10
3.- Crea un programa que realice un triangulo
#
##
###
####
#####
######
#######



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
let resultado = 1; // Declare the 'resultado' variable before the for loop
for (let contador = 0; contador < 10; contador = contador + 1){
resultado = resultado * 2;
console.log(resultado)

}
console.log(resultado)
*/
/*
let piramide = "#";

let contador = 0;
while (contador < 12) {
    console.log(piramide);
    piramide += "#";
    contador = contador + 1;
}
*/
