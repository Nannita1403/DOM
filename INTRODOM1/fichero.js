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

//? METODO PARA VER ELEMENTOS PADRES E HIJOS
//* 1) METODO PARA VER QUE ETIQUETA ESTA ENCIMA (PADRE DIRECTO) - NO
console.log(title.parentElement);

//* 2) METODO PARA VER SACAR LOS HIJOS
// ACA SACAMOS CON ID = USANDO # + el ID de HTML para ver los hijos y el contenido
const div = document.querySelector("#paraghaphdiv")
console.log(div.childNodes);

//? METODO PARA CREAR ELEMENTOS 
//? 1) crear elementos para inyectar elementos en JS para insertar en HTML
// crear un nodo desde cero.
//* 1) crear un Tiulo= h1 + nodo desde cero
const title4 = document.createElement ("h1"); //aca no esta reflejado todavia (esta en el limbo)
title4.innerText = "Title";
console.log(title4);
//* 2) aca lo que voy a hacer es insertarlo en el Docuemnto como un nuevo hijo
document.body.appendChild(title4);

//? 2) crear y cargar una imagen:

const image = document.createElement("img");
// traigo la direccion de la imagen que quiero
image.src = "https://tse1.mm.bing.net/th?id=OIP.Hf1fzVhQli-QEEdHhyDydwHaIr&pid=Api&P=0&h=180";
// pongo un tecto alternativo:
image.alt = "JavaScript logo"

document.body.appendChild(image);

//? 3) TAMBIEN EXISTE UNA MANERA RAPIDA PERO PERDEMOS PODERES DEL NODO
const div2 = document.createElement("div");

div2.innerHTML = `<p>Soy un segundo div<p>`;
document.body.appendChild(div2); // esto funciona solo por que DIV es un nodo

//? 4) Tambien podemos crear Templates o plantillas:
const div3 = document.createElement("div");
// aca agregamos el contenido del texto:
const content = "Este es el contenido" 
// aca no hay contenido (como antes) sino la VARIABLE que creamos en la linea anterior
div3.innerHTML = `<p>${content}<p>`; 
document.body.appendChild(div3); 

//? AHORA A TRABAJAR CON CLASES (STILOS DE CSS)
// propiedad: class list y podemos acceder para agregar, modificar, y comprobar las clases 

image.classList.add("byw"); //Me permite AGREGAR una clase del CSS Y Aplicarla A HTML
image.classList.remove("byw"); // Me permite ELIMINAR una Clase aplicada en el HTML de estilo

//? toggle: añade estilo si no esta aplicado pero si la encuentra te la quito
image.classList.toggle("byw"); //aqui la aplica por que no la encuentra //!ON - true
image.classList.toggle("byw"); // aqui la elimina por que ya estaba aplicada //!OFF - false
image.classList.toggle("byw");

// Se puede verificar si tiene la clase aplicada con: 
console.log(image.classList.contains("byw")); //Aca va a dar un true o false.

