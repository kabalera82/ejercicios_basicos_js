/*
Ejercicio 2

1. Luke Skywalker cumple años:
Modifica el siguiente código JavaScript para actualizar la edad de Luke Skywalker a 25 años.

const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad = 25; 

console.log(jedi);

---------------------------------------------------------------------------------------------------------------------------

2. Presentación al estilo Leia Organa:
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

3. Calculando el coste total de sables de luz:
- Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader".
- Imprime el resultado por consola utilizando console.log.


const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};


console.log("El " + sable1.nombre + " y el " + sable2.nombre + " cuestan en total " + (sable1.precio + sable2.precio) + " créditos galácticos.");

---------------------------------------------------------------------------------------------------------------------------

4. Actualizando el precio final de las naves:

- Modifica el valor de la variable global precioBaseGlobal a 25.000 créditos.

- Actualiza el precio final (precioFinal) de dos naves ("Ala-X" y "Halcón Milenario") sumando el valor de precioBaseGlobal a su precio base (precioBase).


let precioBaseGlobal = 10000;



const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

precioBaseGlobal = 25000;

console.log("El precio final del " + nave1.nombre + " es de " + (nave1.precioBase + precioBaseGlobal) + " créditos galácticos.");
console.log("El precio final del " + nave2.nombre + " es de " + (nave2.precioBase + precioBaseGlobal) + " créditos galácticos.");

*/

/*

3. Calculando el coste total de sables de luz:
- Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader".
- Imprime el resultado por consola utilizando console.log.


const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
*/

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

const precioBase = 20000;

sable1.nombre = "Sable de Luz";
sable1.precio = 15000;

console.log('El precio de '+ sable1.nombre + ' es de ' + (sable1.precio+precioBase) + ' Creditos espaciales');