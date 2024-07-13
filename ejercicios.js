/*
------------------------------------------------------------------------------------------------------------------------------------
Ejercicio 1

1. Define tu superhéroe favorito:
Crea una variable llamada miSuperheroeFavorito y asigna el valor "Hulk".
2. Define un número:
Crea una variable llamada numeroFavorito y asigna el valor 50.
3. Define las dimensiones:
Crea una variable llamada altura y asigna el valor 5.
Crea una variable llamada longitud y asigna el valor 10.
4. Calcula la suma:
Crea una variable llamada suma y asigna el valor de altura + longitud.
5. Imprime los resultados:
Muestra todas las variables por consola.

Solución:

const miSuperheroeFavorito = "Hulk";
const miNumeroFavorito = 50;
var altura = 5;
var longitud = 10;

var suma = altura + longitud;

console.log(suma);

-------------------------------------------------------------------------------------------------------------------------------------

2. Luke Skywalker cumple años:
Modifica el siguiente código JavaScript para actualizar la edad de Luke Skywalker a 25 años.

const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad = 25;

console.log((jedi.nombre)+(jedi.edad));

---------------------------------------------------------------------------------------------------------------------------

3. Presentación al estilo Leia Organa:
- Crea tres variables con la siguiente información:

nombre: "Leia"
apellido: "Organa"
edad: 20
planeta: "Alderaan"

- Muestra un mensaje por consola que siga la siguiente estructura:
"Soy Leia Organa, tengo 20 años y soy una princesa de Alderaan."
- Utiliza la concatenación para ello.


var nombre = "Leiaa"
var apellido = "Organa"
var edad = 20;
var planeta = "Alderaan";

console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de " + planeta + ".");

---------------------------------------------------------------------------------------------------------------------------

4. Calculando el coste total de sables de luz:
- Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader".
- Imprime el resultado por consola utilizando console.log.


const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};


console.log("El " + sable1.nombre + " y el " + sable2.nombre + " cuestan en total " + (sable1.precio + sable2.precio) + " créditos galácticos.");

---------------------------------------------------------------------------------------------------------------------------

5. Actualizando el precio final de las naves:

- Modifica el valor de la variable global precioBaseGlobal a 25.000 créditos.

- Actualiza el precio final (precioFinal) de dos naves ("Ala-X" y "Halcón Milenario") sumando el valor de precioBaseGlobal a su precio base (precioBase).


let precioBaseGlobal = 10000;



const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

precioBaseGlobal = 25000;

console.log("El precio final del " + nave1.nombre + " es de " + (nave1.precioBase + precioBaseGlobal) + " créditos galácticos.");
console.log("El precio final del " + nave2.nombre + " es de " + (nave2.precioBase + precioBaseGlobal) + " créditos galácticos.");

-------------------------------------------------------------------------------------------------------------------------------------

6. Calculando el coste total de sables de luz:
- Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader".
- Imprime el resultado por consola utilizando console.log.


const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};


const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

const precioBase = 20000;

sable1.nombre = "Sable de Luz";
sable1.precio = 15000;

console.log('El precio de '+ sable1.nombre + ' es de ' + (sable1.precio+precioBase) + ' Creditos espaciales');

--------------------------------------------------------------------------------------------------------------------------------------

7. En este ejercicio podéis mostrar directamente los resultados por consola o almacenarlos en variables 
(esto lo podéis hacer en todos los demás, como os resulte más claro).

7.1 Multiplica 10 por 5 y muestra el resultado mediante console.
7.2 Divide 10 por 2 y muestra el resultado en un console.
7.3 Muestra mediante un console el resto de dividir 15 por 9.
7.4 Usa el correcto operador de asignación que resultará en o = 15,
teniendo dos variables p = 10 y j = 5.
7.5 Usa el correcto operador de asignación que resultará en i = 50,
teniendo dos variables c = 10 y m = 5.

// 7.1 Multiplica 10 por 5 y muestra el resultado mediante console.


console.log(10 * 5);

var x=10
var y=5

console.log(x * y);


// 7.2 Divide 10 por 2 y muestra el resultado en un console.


console.log(10/2);

var x=10
var y=2

console.log(y / x);


// 7.3 Muestra mediante un console el resto de dividir 15 por 9.

console.log(15 % 9);

-----------------------------------------------------------------------------------------------------------------------
7.4 Usa el correcto operador de asignación que resultará en o = 15,
teniendo dos variables p = 10 y j = 5.

let p = 10;
let j = 5;
let o = p; // Inicialmente, asignamos el valor de p a o
o += j; // Sumamos el valor de j a o


console.log(o);

-----------------------------------------------------------------------------------------------------------------------


7.5 Usa el correcto operador de asignación que resultará en i = 50,
teniendo dos variables c = 10 y m = 5.



let c = 10;
let m = 5;

let i = c * m;

console.log(i);

------------------------------------------------------------------------------------------------------------------------------------

Ejercicio 8

Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
8.1 - Saca a "Tendo" por consola atacando su posición.
8.2 - Coloca en el último lugar de este array a "Cervasio".
8.3 - Cambia el primer elemento de este array por "Bambina".
8.4 - Dale la vuelta a este array.
8.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
8.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
Pista: puedes usar el método length con algo más para ello.

------------------------------------------------------------------------------------------------------------

8.1 - Saca a "Tendo" por consola atacando su posición. 

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log(aldeanos[3]);

------------------------------------------------------------------------------------------------------------

8.2 - Coloca en el último lugar de este array a "Cervasio".



const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

aldeanos.push("Cervasio");

console.log(aldeanos);

------------------------------------------------------------------------------------------------------------

8.3 - Cambia el primer elemento de este array por "Bambina".

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

aldeanos[0] = "Bambina";

// aldeanos.splice(2,0, "Bambina"); asi se inserta en la posicion

console.log(aldeanos);

------------------------------------------------------------------------------------------------------------
8.4 - Dale la vuelta a este array.

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

aldeanos.reverse();

console.log(aldeanos);

------------------------------------------------------------------------------------------------------------

8.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

aldeanos.splice(1, 1, "Canela");

console.log(aldeanos);

------------------------------------------------------------------------------------------------------------

8.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log(aldeanos[aldeanos.length - 1]);

------------------------------------------------------------------------------------------------------------
/* 
Ejercicio 9

9.1 En base a este código, cambia todos los COMPLETAR por la condición correspondiente 
para que se lancen todos los console.log correctamente. Tienes como referencia el ejemplo del primer if.


const number1 = 10;
const number2 = 20;
const number3 = 2;


if(number1 === 10){
    console.log('number1 es estrictamente igual a 10');
}

if (number2/number1 === 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3*5 != number1) {
  console.log("number3 es distinto number1");
}

if (number3*5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2 === number1 || number1/ 5 === number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}

---------------------------------------------------------------------------------------------------------------------------------------

Ejercicio 10

10.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.

10.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo 
cuando el resto del numero dividido entre 2 sea 0.

10.3 Crea un bucle para conseguir dormir contando ovejas. 
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a '¡Dormido!'.

------------------------------------------------------------------------------------------------------------------------------------------------------

1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.

for (let i = 0; i < 10; i++) {
    console.log(i);
}

------------------------------------------------------------------------------------------------------------------------------------------------------

1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo 
cuando el resto del numero dividido entre 2 sea 0.

for (let i =0 ; i < 10; i++) {
    if (i % 2 === 0) 
        console.log( i)}

------------------------------------------------------------------------------------------------------------------------------------------------------

1.3 Crea un bucle para conseguir dormir contando ovejas.

Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
y cambia el mensaje en la décima vuelta a '¡Dormido!'.



for (let i = 0; i < 10; i++) {
    if (i < 9)
        console.log("Intentando dormir 🐑");
    else
        console.log("¡Dormido!");
}

---------------------------------------------  Ejercicio 10  -----------------------------------------------------------------

Completa esta función para que, al recibir dos números por argumento,
 te devuelva por consola el más alto de los dos.

 

 var numero1 = parseInt(prompt("Introduce un número:"));
 var numero2 = parseInt(prompt("Introduce un número:"));
 
 function imprimirElNumeroMasAlto(numero1, numero2) {
     if (numero1 > numero2) {
       console.log(numero1);      
     } else if (numero2 > numero1) {
       console.log(numero2);
     }   else {
         console.log("Ambos números son iguales.");
     }
   };
 
 imprimirElNumeroMasAlto(numero1, numero2);


 -------------------------------------  EJERCICIO 11  -----------------------------------------------------------------

Buscar la palabra más larga: 
Completa la función que tomando un array de strings como argumento devuelva el más largo, 
en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:
 

// Completa la función que tomando un array de strings como argumento devuelva el más largo,
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.


const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
const alumnos = ['pedro', 'samuel', 'lucas', 'rodrigo', 'juan'];

function palabraMasLarga(strings) { 

  let masLarga = "";
  strings.forEach(str => {
    if (str.length > masLarga.length) {
      masLarga = str;
    }
  });
  return masLarga;
}

console.log(palabraMasLarga(avengers));
console.log(palabraMasLarga(alumnos));



 ----------------------------------------  EJERCICIO 12  -------------------------------------------------------------------------

Ejercicio 12

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.

Completa la función denominada sumNumbers que toma un array de números como argumento y 
devuelve la suma de todos los números del array.

Puedes usar este array para probar tu función:


const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNum(nums) {
  let num = 0;
  for(let i = 0; i < nums.length; i++){
  num += nums[i];
  }
return num;
}

console.log(sumNum(numbers));

------------------------------------------------- Ejercicio 13-----------------------------------------------------------

Ejercicio 13

Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y 
de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo','estudio del mundo'];


function averageWord(mixed) {
  let sum = 0;
  for (let element of mixed) {
    if (typeof element === 'number') {
      sum += element;
    } else if (typeof element === 'string') {
      sum += element.length;
    }
  }
  return sum; 
}
console.log(averageWord(mixedElements));

---------------------------------------------------- Ejercicio 14 -------------------------------------------------------------

Ejercicio 14

Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
 en caso que existan los elimina para retornar un array sin los elementos duplicados.

Pista: puedes generar un nuevo array y devolverlo.

Puedes usar este array para probar tu función:



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
  'soda',
  'soda',
  'chicken'
];

function tieneDuplicados(arr) {
  const resultado = [];
  const registro = [];
  for (let i = 0; i < arr.length; i++) {
    if (!registro[arr[i]]) {
      resultado.push(arr[i]);
      registro[arr[i]] = true;
    }
  }
  return resultado;
}


console.log(tieneDuplicados(duplicates));

---------------------------------------------------- Ejercicio 15 -------------------------------------------------------------

Ejercicio 15

Buscador de nombres: Crea una función que reciba por parámetro un array y 
el valor que desea comprobar que existe dentro de dicho array. 
Esta función comprueba si existe el elemento, 
y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

Puedes usar este array para probar tu función:

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

function compruebaNombre(longitud,nombre) {
  let resultado = longitud.indexOf(nombre);
    if (resultado !== -1) {
      return [true, resultado];
    } else{
    return false;
  }
}


console.log(compruebaNombre(names, 'Jessica'));

---------------------------------------------------- Ejercicio 16 -------------------------------------------------------------


Ejercicio 16

Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las 
palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

Puedes usar este array para probar tu función:



const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function cuentaPalabras(lista){
let contador=[]; // 
for (let palabras of lista){
    if(contador[palabras]){
      contador[palabras]++;
    }else{
    contador[palabras]=1;
    }
  
  }
  return contador;
}
console.log(cuentaPalabras(words));

--------------------------------------------------- Ejercicio 17 -------------------------------------------------------------



Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".

Usa la función .includes de javascript.


const products = [
  'Camiseta de Metallica', 
  'Pantalón vaquero', 
  'Gorra de beisbol', 
  'Camiseta de Basket', 
  'Cinturón de Orión', 
  'AC/DC Camiseta'];
  let camiseta = [];
  for (let producto of products){
    if(producto.toLowerCase().includes('camiseta'))
      camiseta.push(producto)
  }
  console.log(camiseta)

  --------------------------------------------------- Ejercicio 18 -------------------------------------------------------------


Ejercicio 18

For...of: Usa un bucle for of para recorrer todos los destinos del array.

Imprime en un console.log cada uno de sus valores.



const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (let place of placesToTravel){
  console.log(place)
}

 --------------------------------------------------- Ejercicio 19 -------------------------------------------------------------

Ejercicio 19

For...in: Usa un for...in para imprimir por consola los datos del alienígena.

Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____"

Puedes usar este objeto:



const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
};

for (const property in alien){
  console.log('La propiedad ${property} tiene cómo valor: ${alien[property]}')
}

--------------------------------------------------- Ejercicio 20 -------------------------------------------------------------

Ejercicio 20

Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.

Imprime en un console log el array resultante.

Puedes usar este array:



const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (let i = 0;i<placesToTravel.length;i++){
  if (placesToTravel[i].id === 11){
    placesToTravel.splice(i, 1);
  }
  else if(placesToTravel[i].id === 40){
    placesToTravel.splice(i, 1);

  }
 
}
console.log(placesToTravel);

--------------------------------------------------- Ejercicio 21 -------------------------------------------------------------


Ejercicio 21

Mixed For...of e includes: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).

Recuerda usar la función .includes() para comprobar la palabra.

Puedes usar este array:




const toys = [
    {id: 5, name: 'Transformers'}, 
    {id: 11, name: 'LEGO'}, 
    {id: 23, name: 'Hot Wheels'}, 
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];
const nonCat=[];
for (let toy of toys){
  if (!toy.name.includes('gato')){
    nonCat.push(toy)
  }
}
console.log(nonCat)


--------------------------------------------------- Ejercicio 22 -------------------------------------------------------------

Ejercicio 22

For...of avanzado: Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys.

Imprímelo por consola.

Puedes usar este array:



const popularToys = []

const toys = [
    {id: 101, name: 'Super Soaker', sellCount: 15},
    {id: 102, name: 'Tamagotchi', sellCount: 22},
    {id: 103, name: 'Polly Pocket', sellCount: 8},
    {id: 104, name: 'Yo-yo', sellCount: 33},
    {id: 105, name: 'Pikachu plush toy', sellCount: 19},
    {id: 106, name: 'Rubik\'s Cube', sellCount: 27},
    {id: 107, name: 'Fidget Spinner', sellCount: 12},
    {id: 108, name: 'Slinky', sellCount: 5},
    {id: 109, name: 'Magic 8-Ball', sellCount: 38},
    {id: 110, name: 'Troll Doll', sellCount: 20}
];

for (let toy of toys){
  if (toy.sellCount > 15){
    popularToys.push(toy) 
  }

}
console.log(popularToys)

------------------------------------------------- Ejercicio 23 -----------------------------------------------------------------


Ejercicio 23

Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto 
"Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, 
precedido del texto "Usuarios mayores de edad:".



const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
let menores = [];
let mayores = [];

for (let user of users) {
  if (user.years < 18) {
    menores.push(user.name); 
  } else {
    mayores.push(user.name); 
  }
}


console.log(`Usuarios menores de edad: ${menores.join(', ')}, usuarios mayores de edad: ${mayores.join(', ')}`);


------------------------------------------------- Ejercicio 24 -----------------------------------------------------------------

Ejercicio 24

Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante.



const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
const foodVegan = [];

let fruitPos = 0; // 

for (let food of foodSchedule) {
  if (food.isVegan === true) {
    foodVegan.push(food);
  } else {
    foodVegan.push({ name: fruits[fruitPos], isVegan: true });
    fruitPos++;
  }
}
console.log(foodVegan);

------------------------------------------------- Ejercicio 25 -----------------------------------------------------------------


Ejercicio 25

Usa un bucle para crear 3 arrays de películas filtrados por categorías.

Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.

Imprime cada array por consola.

*/
const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },  
  { name: "The Matrix", durationInMinutes: 136 },  
  { name: "Amélie", durationInMinutes: 110 },  
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];
