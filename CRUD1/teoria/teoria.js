//! CRUD -> siglas -> CREATE READ UPDATE DELETE
//*  son las cosas que puedes hacer para hacer un crud completo 

//? CREATE -> crear información en el DOM
//? READ -> leer información del DOM
//? UPDATE -> actualizar la información
//? DELETE -> eliminar esa información


//! DOM -> DOCUMENT OBJECT MODEL

//? String
//? Number
//? Object
//? Boolean
//? Array

// array no es un tipo de dato como tal es un OBJETO
/* console.log(typeof []); */

//! hay muchísimos métodos en DOM, muchos harán lo mismo o prácticamente lo mismo

//? READ
// nos apoyamos en el documento para buscar y leer alguna cosa

// busque el h1 de mi HTML y lo muestre por consola
/* const myH1 = document.querySelector("h1");

console.log(myH1); */

//? MÉTODOS READ

//! getElementsByTagName selecciona del DOM TODOS los elementos que cumplan con el nombre de etiqueta aportado 
//! -> devuelve un array de nodos (HTMLCollection)

console.log("getElementsByTagName", document.getElementsByTagName("h1"));

//! getElementById selecciona el Nodo de nuestro HTML por id
console.log("getElementById", document.getElementById("alumnoDelMes"));

//! getElementsByClassName traer TODOS los elementos que tengan la clase aprobado
console.log("getElementsByClassName", document.getElementsByClassName("aprobado"));

//! querySelector selecciono UN único elemento por la condición que le indique (primero)
console.log("querySelector por etiqueta", document.querySelector("h1"));
console.log("querySelector por id", document.querySelector("#alumnoDelMes"));
console.log("querySelector por clase", document.querySelector(".aprobado"));
console.log("querySelector por clase", document.querySelector("p.aprobado"));
console.log("querySelector por clase", document.querySelector("p.aprobado > span.nota"));

//! querySelector selecciono UN único elemento por la condición que le indique (primero)
console.log("querySelectorAll por etiqueta", document.querySelectorAll("h1"));
console.log("querySelectorAll por id", document.querySelectorAll("#alumnoDelMes"));
console.log("querySelectorAll por clase", document.querySelectorAll(".aprobado"));
console.log("querySelectorAll por clase", document.querySelectorAll("p.aprobado"));
console.log("querySelectorAll por clase", document.querySelectorAll("p.aprobado > span.nota"));



//? UPDATE
// para actualizar no hay 5 métodos o 10 métodos
// voy a poder actualizar todo tipo de cosas en mis elementos de HTML

// READ
const allMyAlumns = document.querySelectorAll("p"); // array

//? 1) OPCION DE PASO CAMBIO DE CLASE; PASADO 5 SEGUNDOS SE CAMBIAN LOS APROBADOS Y MODIFICAN EL COLOR POR EJ.
//* opcion para cambiar una clase para cambiar de aprobado a suspendido, y se cambia el color:
/* setTimeout(() => {
    for (const aprobado of allMyAprobados) {    // Aca tomo a todos los aprobados
        aprobado.className = "suspendido"       // Aca determino que todos los aprobados se transformen en suspendidos
    }
}, 500);*/

//! Tener en cuenta que en CSS se termina los colores de p.aprobados y de p.suspendidos

//? 2) OPCION DE PASO CAMBIO DE CLASE:
//* Aca lo que voy a hacer es un set interval(un bucle infinito cada 1 segundo);

setInterval={}(() => {
    for (const aprobado of allMyAprobados) {    // Aca tomo a todos los aprobados
        if (aprobado.className === "suspendido") { //aca pregunto si esta suspendido..
            aprobado.className = "aprobado";       //sino los aprobados son aprobados
        }  else {
            aprobado.className = "suspendido";      // los demas sino son siempre suspendido
        }
    }
}, 1000);

//? 3) ACA QUIERO PODER FILTRAR A LOS ALUMNOS POR LAS NOTAS Y QUE EL SISTEMA SOLO LOS DETERMINE APROBADOS O SUSPENSOS:
//* Aca lo que voy a hacer es un set interval(un bucle infinito cada 1 segundo);

/*
for (const alumn of allMyAlumns) {          // aca tomo a cada alumn
    //*   alumno. primer hijo(nombre de alumno).siguiente hermano(span con la clase nota).texto(nota)  
    /! parseInt: transforma un string a numero)
    if (parseInt(alumn.firstChild.nextSibling.textContent) >= 5) { //* determino que si la nota es mayor o igual a 5
        alumn.className = "aprobado";                   //* estonces esta aprobado
    } else {
        alumn.className = "suspendido";                 //* Sino va a estar aprobado
    }
}*/
//? 4) Aca es lo mismo que arriba, pero con TOGGLE:

/* setInterval(() => {
    for (const aprobado of allMyAlumns) {
        aprobado.classList.toggle("aprobado"); // toggle es ponerla o quitarla (es un bucle en si mismo)
        if (aprobado.className === "suspendido") {
            aprobado.className = "aprobado";
        } else {
            aprobado.className = "suspendido";
        }

        if (aprobado.textContent === "aprobado") {
            aprobado.textContent = "suspenso";
        } else {
            aprobado.textContent = "aprobado";
        }
    }
}, 1000); */