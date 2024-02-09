//* Video de INTRO DOM 1/9
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

console.log("----------------------------------");

//? COmo hacer para insertar contenido desde JS a HTMl (no solo traer)
// crear un nodo desde cero.

//* 1) insertar una etiqueta con texto:

const title4 = document.createElement ("h1"); //aca no esta reflejado todavia (esta en el limbo)
title4.innerText = "Title";
console.log(title4);

// aca lo que voy a hacer es insertarlo en el Docuemnto como un nuevo hijo
document.body.appendChild(title4);

//* 2) Imagen, src con una imagen y cargarla:

const imagen = document.createElement("img");
// traigo la direccion de la imagen que quiero
imagen.src = "https://tse1.mm.bing.net/th?id=OIP.Hf1fzVhQli-QEEdHhyDydwHaIr&pid=Api&P=0&h=180";
// pongo un tecto alternativo:
imagen.alt = "JavaScript logo"
// cargo la imagen en HTML:
document.body.appendChild(imagen);


//* 3) TAMBIEN EXISTE UNA MANERA RAPIDA PERO PERDEMOS USOS DE METODOS DEL NODO
// vamos a hacer la comparativa:

const div2 = document.createElement("div");
// Aca a difentencia insertamso directamente en el HTML el textp
div2.innerHTML = `<p>Soy un segundo div<p>`;
document.body,appendChild(div2)

//* 4) Tambien podemos crear Templates o plantillas:
//! muy importante por que se pueden reutilizar:
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

// Toggle se usa para poder armar un estilo tipo ON OFF que me permite por ej:
// 1) ampliar y reducir un menu desplegable cuando presiono
// 2) Ampliar o reducir un imagen al tocarla 
//? toggle tiene algo muy bueno que es: que si no existe la clase la añado pero si la encuentra te la quito
image.classList.toggle("byw"); //aqui la aplica por que no la encuentra //!ON - true
image.classList.toggle("byw"); // aqui la elimina por que ya estaba aplicada //!OFF - false
image.classList.toggle("byw");

// Se puede verificar si tiene la clase aplicada con: 
console.log(image.classList.contains("byw")); //Aca va a dar un true o false.

console.log("-----------------------------------");
//! 3er video 28/31

//? como controlar los imputs de los usuarios en la web = EVENTOS DE USUARIOS

//* Evento es una accion / el acto que va a generar una reperción o que se active algo:
//EJ. Prender la luz(evento=acto) es el paso de energia y Aparla (NVO evento/acto) es el corte de energia

// Podemos saber todo: quien lo hizo, en que parte de la web, que selecciono, que toco

//? EVENTOS:
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

//? 2) EVENTOS DIFERENTES: SCROLL, BUSCADOR... 
// Aparte de escuchar eventos del documento, podemos escuchar eventos del Navegador
//! WINDOWS ES ESCALABLE COMO UN DOCUMENTO (ES COMO EL PADRE DEL DOC)
//* Podemos acceder a Windows para ver el scroller de la pagina

window.addEventListener("scroll", (ev) => {
    console.log(ev);
}) // me da un evento aprox de cada pixel que scrolleamos (podemos ver detalle en propiedades)

console.log("--------------------------------------------");

//! Video 4 : 30/31 Crear [Insertar] Modificar [Insertar] Eliminar [Refrescar]

