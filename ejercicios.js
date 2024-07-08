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

-----------------------------------------------------------------------------------------------------------------------


7.1 Multiplica 10 por 5 y muestra el resultado mediante console.


console.log(10 * 5);

var x=10
var y=5

console.log(x * y);

-----------------------------------------------------------------------------------------------------------------------

7.2 Divide 10 por 2 y muestra el resultado en un console.


console.log(10/2);

var x=10
var y=2

console.log(y / x);

-----------------------------------------------------------------------------------------------------------------------

7.3 Muestra mediante un console el resto de dividir 15 por 9.

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
*/