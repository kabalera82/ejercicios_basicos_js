/*Ejercicio 9

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.

Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.

Puedes usar este array para probar tu función:
*/
const numbers = [1, 2, 3, 5, 45, 37, 58];

const resultado = sumNumbers(numbers); // La suma de los números es: 151    // 1 + 2 + 3 + 5 + 45 + 37 + 58 = 151

function sumNumbers(numbers) { // Función que recibe un array de números
    let sum = 0; // 
    for (let number of numbers) { // Iteramos sobre el array de números y sumamos cada uno de los elementos 
        sum +=number; // sum = sum + number   
    }
    return sum;
}
   
console.log("La suma de los números es:", resultado); 

