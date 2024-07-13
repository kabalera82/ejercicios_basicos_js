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

function buscaNombre(array, nombre) { 
  let position = array.indexOf(nombre);  // indexOf devuelve la posición del nombre en el array 
  if (position !== -1) { // Si el nombre no existe en el array, indexOf devuelve -1 que indica que no existe
    return [true, position]; 
  } else { 
    return false; 
  }
}

console.log(buscaNombre(names, 'Jessica'));