/*Ejercicio 9

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.

Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.

Puedes usar este array para probar tu función:
*/
const numbers = [1, 2, 3, 5, 45, 37, 58];



function sumNum(num) { // Función que recibe un array de números
    let sum = 0; // Inicializamos la variable sum en 0 
    for (let numb of num) { // Iteramos sobre el array de números y sumamos cada uno de los elementos 
        sum += numb; // sum = sum + num  
    }
    return sum;
}
   
console.log("La suma de los números es:", sumNum(numbers)); 

