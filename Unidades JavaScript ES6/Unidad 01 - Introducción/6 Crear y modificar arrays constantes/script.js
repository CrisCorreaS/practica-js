/*
En el curso de Javascript I aprendimos varios conceptos sobre funciones, como la introducción a las funciones en este lenguaje de programación, o el concepto de funciones anónimas, muy relacionado con las funciones flecha o arrow functions que veremos en esta lección.
Las funciones flecha permiten definir de manera compacta una función convencional. Si la función tiene solamente una sentencia que devuelve un valor, el uso de funciones flecha nos permite eliminar las llaves y la palabra return. Incluso utilizando parámetros también podemos ver mucho más reducido el código.

La sintaxis básica de las funciones flecha o arrow functions sin parámetros es la siguiente:
    () => { sentencias }

En una función con un solo parámetro podríamos prescindir de paréntesis:
    (singleParam) => { sentencias } singleParam => { sentencias }

Y una función con más de un parámetro podríamos representarla como:
    (param1, param2, …, paramN) => { sentencias }
    (param1, param2, …, paramN) => expresion

En la lección anterior vimos cómo crear constantes utilizando const. Pero a veces, no nos interesa sólamente guardar un valor: necesitamos almacenar varios en un array. ¿Podemos crear y modificar arrays constantes? ¡Por supuesto! Y, como tal, no podemos reasignarlo porque obtendríamos un error.
Pero hay un modo de cambiar los valores de un array constante.
*/

/*
DECLARAR ARRAYS CONSTANTES CON CONST

Al igual que otros tipos de datos, podemos declarar arrays constantes con const.
No podemos redefinirlos utilizando el igual como lo haríamos con una variable, pero sí podemos cambiar sus valores uno a uno
*/

function cambiarArray1(){
    "use strict";

    const MIARRAY = [1, 2, 3];
    console.log(MIARRAY); // (3) [1, 2, 3] -> Devuelve el length del array y el contenido
}

cambiarArray1(); 


// function cambiarArray2(){
//     "use strict";

//     const MIARRAY = [1, 2, 3];
//     console.log(MIARRAY); // (3) [1, 2, 3] -> Devuelve el length del array y el contenido

//     MIARRAY = [4, 5, 6]; //volvemos a asignar valores al array y da un error por ser const
//     console.log(MIARRAY); // Da un error: Uncaught TypeError: Assignment to constant variable. \n at cambiarArray2 (script.js:29:13) \n at script.js:33:1
// }

// cambiarArray2(); 

function cambiarArray3(){
    "use strict";

    const MIARRAY = [1, 2, 3];
    console.log(MIARRAY); // (3) [1, 2, 3] -> Devuelve el length del array y el contenido

    //Si asignamos cada valor por separado, en vez de en bloque, sí que funciona la reasignación
    MIARRAY[0] = 4;
    MIARRAY[1] = 5;
    MIARRAY[2] = 6;
    console.log(MIARRAY); //(3) [4, 5, 6]
}

cambiarArray3(); 