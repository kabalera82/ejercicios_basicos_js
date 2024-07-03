/*
Ejercicio 10

Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

Puedes usar este array para probarla:
*/
const numbers = [12, 21, 38, 5, 45, 37, 6];

const resultado = average(numbers);

function average(numbers) { // Función que recibe un array de números
  let sum = 0;
  for (let number of numbers) {
    sum += number; // Sumamos cada uno de los números del array
  }
  return sum / numbers.length; // Dividimos la suma de los números entre la cantidad de números
}
  console.log("El promedio de los números es: ", resultado);
