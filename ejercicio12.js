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
const ruta=[
  'cohete', 'avion', 'barco', 'carro', 'moto', 'avion', 'carro', 'avion', 'cohete', 'avion', 'barco', 'carro', 'moto', 'avion', 'carro', 'avion'
]
function eliminaDuplicados(arri) {
  let newArray = []; 
  for (let i = 0; i < arri.length; i++) { // Se itera sobre el arreglo original
	if (!newArray.includes(arri[i])) { // Se verifica si el elemento ya está en el nuevo arreglo
	  newArray.push(arri[i]); // Si no está, se agrega al nuevo arreglo
	}
  }
  return newArray; // Se devuelve el nuevo arreglo sin duplicados
}

console.log(eliminaDuplicados(duplicates));
console.log(eliminaDuplicados(ruta));