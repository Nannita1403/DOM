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


//? EVENTOS:
//* Evento es una accion / el acto que va a generar una reperción o que se active algo:
// Creamos un boton en HTML y lo llamamos desde JS

const btn = document.querySelector("#btn");
//? Ahora añadir un escuchador de EVENTOS:
    //() nos pide que caso de evento es = CLICK PARA BOTON (cuando se haga Click) +
    // Luego definimos el evento, definimos que se va a lanzar justo despues = ARROW FUNCTION

    // en esta arrow funcion, dentro de los () podemos tambien declarar una funcion anterior
// o tambien podemos: ver el prpio evento para analizar (que pasa cuando hago click) 

btn.addEventListener("click", (ev) => {
    console.log(ev);
}) 

// Tambien podemos declarar que ante cada CLICK: Se cree un parrafo que se repita como bucle
// ante cada click: y que se agregue ese parrafo 

btn.addEventListener("click", (ev) => {
    const p = document.createElement("p");  //creo el p
    p.innerText = "Has hecho click";        //determino el contenido de p
    document.body.appendChild(p);           //creo este nuevo hijo en el HTML
}) 
//* IMPORTANTE QUE EN CONSOLA ME DEJA VER DONDE FUE EL EVENTO (QUE BOTON POR EJEMPLO O ELEMENTO)

//* 2) EVENTOS DIFERENTES: SCROLL, BUSCADOR... 
// Aparte de escuchar los eventros de nuestro DOC tamb ir mas alla:
//* Podemos acceder a Windows para ver el scroller de la pagina

/*window.addEventListener("scroll", (ev) => {
    console.log(ev);
}) // me da un evento aprox de cada pixel que scrolleamos (podemos ver detalle en propiedades)
*/
//? Crear [Insertar] Modificar [Insertar] Eliminar [Refrescar] (Video 4 30/31)

const technologies = [
    "JavaScript",
    "CSS",
    "HTML",
    "React",
    "Angular",
    "Node.js"
]

// ACA VEREMOS QUE PODEMOS COMBINAR LOS METODOS DE DOM Y LOS DE JS
//* ver orden para no perdernos:

//? quiero crear una lista:

const ul = document.createElement("ul"); //aca creamos en el documento una lista vacia

for (const tech of technologies) {         //Para recorrer el array completo uso metodo ForOf JS
    const li = document.createElement("li"); //Recorre cada uno de los elementos
    li.innerText = tech; //por cada uno de las vueltas agregame el texto de la misma
    ul.appendChild(li) // aca ejecuto los li / pero la lista esta en el limbo
}

document.body.appendChild(ul) // aca ejecuto la ul la lista para que se represente con los li

//? quiero crear un modo noche por ej con un Boton:

const button = document.createElement("button");   //creo el boton
button.innerText = "Theme";                        // Boton texto: tema

button.addEventListener("click", (ev) => {         // aca ejecuto toodle
    document.body.classList.toggle("light")        // determino la accion de click= light/no light
});

document.body.appendChild(button);                 //imprimo el boton en la pagina 