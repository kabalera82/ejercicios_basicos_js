/*
Ejercicio 10

Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

Puedes usar este array para probarla:
*/
const numbers = [12, 21, 38, 5, 45, 37, 6];



function average(num) { // Función que recibe un array de números
  let sum = 0; // Inicializamos la variable sum en 0
  for (let num of numbers) { // Iteramos sobre el array de números
    sum += num; // Sumamos cada uno de los números del array
  }
  return sum / num.length; // Dividimos la suma de los números entre la cantidad de números
}
  console.log("El promedio de los números es: ", average(numbers));
