/*
Ejercicio 13

Buscador de nombres: Crea una función que reciba por parámetro un array y 
el valor que desea comprobar que existe dentro de dicho array. 
Esta función comprueba si existe el elemento, 
y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

Puedes usar este array para probar tu función:
*/

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function buscaNombre(array, nombre) { // Función que recibe un array y un nombre
  let position = array.indexOf(nombre); // Buscamos la posición del nombre en el array
  if (position !== -1) { // Si la posición es diferente a -1, es decir, si el nombre existe
    return [true, position]; // Devolvemos true y la posición del nombre
  } else { // Si la posición es -1, es decir, si el nombre no existe
    return false; // Devolvemos false
  }
}

console.log(buscaNombre(names, 'Jessica'));