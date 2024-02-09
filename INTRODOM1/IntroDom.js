//* Video de INTRO DOM 1
// como usar js en html: 

//! 1ra manera:
//? crear una etiquera al final de Body (por que se leera cuando termina el contenido de HTML)ç
// <scrip src="nombre del fichero.js"></scrip>

//! 2da manera:
//? puede ser mas limpio o ordenado. ADEMAS que no le pongamos algo debajo
//? LO PONEMOS EN EL HEAD - como cuando linqueo un css, pero:
<scrip src="nombre del fichero.js" defer ></scrip>
// el defer lo que hace es como un stop. Le indica que espere que el codigo se renderice Primero
//para luego ejecutar el archivo JS liqueado. Ppor que el codigo se lee de arriba hacia abajo
// y sino esto generaria un problema.

//? METODO PARA RECUPERAR LO QUE HAY EN EL HTML Y PODER TRABAJAR
//VAMOS A RECUPERAR EL TITULO

// NODO: UNE UN ELEMENTO DE HTML A JS
//* 1) SELECCIONAMOS LOS ELEMENTOS POR NOMBRE DE ETIQUETA

const title = document.body.getElementsByTagName("h1")

//* 2) SELECCIONAMOS LOS ELEMENTOS POR CLASE 

const title2 = document.body.getElementsByClassName("h1")

//* 3) Herramienta en conjuntno para tener todos estos elementos por o clase o tag, con o sin atributo
//! mas usado
// agrupa a todos (clases, atributos, etc)
//? POR CLASE   const title3 = document.querySelector(".")
//? POR ID      const title3 = document.querySelector("#")
//? ETIQUETA    const title3 = document.querySelector(" ") //SIN NADA

const title3 = document.querySelector("h1")

console.log(title);
console.log(title2);
console.log(title3);



//? METODO PARA ELEMENTOS PADRES E HIJOS
//* 1) METODO PARA VER QUE ETIQUETA ESTA ENCIMA (PADRE DIRECTO) - NO
console.log(title.parentElement);

//* 2) METODO PARA VER SACAR LOS HIJOS
// ACA SACAMOS CON ID = USANDO # + el ID de HTML para ver los hijos y el contenido
const div = document.querySelector("#paraghaphdiv")
console.log(div.childNodes);



