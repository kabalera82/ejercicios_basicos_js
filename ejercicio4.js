
/*
Ejercicio 4

Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
4.1 - Saca a "Tendo" por consola atacando su posición.
4.2 - Coloca en el último lugar de este array a "Cervasio".
4.3 - Cambia el primer elemento de este array por "Bambina".
4.4 - Dale la vuelta a este array.
4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
Pista: puedes usar el método length con algo más para ello.

------------------------------------------------------------------------------------------------------------

4.1 - Saca a "Tendo" por consola atacando su posición. 

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log(aldeanos[3]);

------------------------------------------------------------------------------------------------------------

4.2 - Coloca en el último lugar de este array a "Cervasio".



const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

aldeanos.push("Cervasio");

console.log(aldeanos);

------------------------------------------------------------------------------------------------------------

4.3 - Cambia el primer elemento de este array por "Bambina".

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

aldeanos[0] = "Bambina";

console.log(aldeanos);

------------------------------------------------------------------------------------------------------------
4.4 - Dale la vuelta a este array.

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

aldeanos.reverse();

console.log(aldeanos);

------------------------------------------------------------------------------------------------------------

4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

aldeanos.splice(1, 1, "Canela");

console.log(aldeanos);

------------------------------------------------------------------------------------------------------------

4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log(aldeanos[aldeanos.length - 1]);

------------------------------------------------------------------------------------------------------------

*/