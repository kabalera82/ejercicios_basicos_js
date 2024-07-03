/*
Ejercicio 12

Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
 en caso que existan los elimina para retornar un array sin los elementos duplicados.

Pista: puedes generar un nuevo array y devolverlo.

Puedes usar este array para probar tu función:
*/
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function eliminaDuplicados(array) {
  return Array.from(new Set(array));
}

const valorUnico = eliminaDuplicados(duplicates);

function removeDuplicates() {
  let newarray = 0;
  for (let element of duplicates) {
    if (typeof element === 'string') {
      newarray += element;
    }
  }
  return newarray;
}

console.log("El nuevo array sin duplicados es: ", valorUnico);
    


