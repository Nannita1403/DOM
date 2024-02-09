console.log("hola!");

const title = document.body.querySelector("h1")

console.log(title);

// como hacemos para seleccionar un elemento determinado cuando hay mas de uno:
//* Ej en el html hay 2 <p>: uno en el Body y uno en u <div>:
//! IMPORTANTE si hay mas de un P  siempre selecciona el  1ro que encuentra
const divP = document.querySelector("div > p")

console.log(divP);

//* Si queremos que seleccione todos los que hay (ME VA A DAR UN NODO CON TODOS LOS ELEMENTOS)
const allDivP = document.querySelectorAll("div > p")

console.log(allDivP);

//? METODO PARA ELEMENTOS PADRES E HIJOS
//* 1) METODO PARA VER QUE ETIQUETA ESTA ENCIMA (PADRE DIRECTO) - NO
console.log(title.parentElement);

//* 2) METODO PARA VER SACAR LOS HIJOS
// ACA SACAMOS CON ID = USANDO # + el ID de HTML para ver los hijos y el contenido
const div = document.querySelector("#paraghaphdiv")
console.log(div.childNodes);