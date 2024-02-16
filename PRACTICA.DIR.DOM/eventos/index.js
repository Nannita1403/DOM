//? se toma el boton por que es lo que siempre intentamos hacer es lo tipico
//! lo primero que necesito para darle funcionalidad al botón es el botón
const button = document.querySelector("button"); // aca tengo uno solo entonces olo tomo por etiqueta


function darVuelta (e) { // creo la funcion para que pasa cuando pasamos el mouse por arriba del boton
    /* console.log(event.target.remove()); */
    //* TARGET= PARRAFO DONDE ESTOY EJECUTANDO EL EVENTO.ELIMINAR
    e.target.style.transform = "rotate(180deg)";
}
let cantidadParrafos = 0;

function crearParrafo () {
    const p = document.createElement("p");

    cantidadParrafos++; //ACA SUMO PARRAFO UNO EN UNO

    p.textContent = "Soy un párrafo nuevo";

 
    if (cantidadParrafos === 1) {     // ESTO ES PARA QUE SOLO SE DE VUELTA EL PRIMER PARRAFO
        p.addEventListener("mouseover", (e) => darVuelta(e));
        /* p.addEventListener("mouseover", darVuelta); */
    }

    //! manera diferente de tomar solo el primer parrafo:
/* function addEventos () {
    const allP = document.querySelectorAll("p"); //* tomo todos los parrafor
    allP[0].addEventListener("mouseover", (e) => darVuelta(e));
} */
    document.body.appendChild(p);
    /* addEventos(); */ //! ultima parte de la segunda manera de marcar solo el 1er parrafo
    //* ojo ACA siempre el evento se tiene que llamar despues de crear los parrafos a HTML
} 

button.addEventListener("click", () => crearParrafo("Soy un párrafo nuevo"))







//? 1ra manera de actuar con el BOTON
/* button.onclick = () => crearParrafo("Soy un párrafo nuevo"); */

//? 2da manera de actuar con el BOTON
/* button.addEventListener("click", crearParrafo);

function nombreFuncion () {
    crearParrafo("Soy un párrafo nuevo");
}
//* = a  button.addEventListener("click", () => crearParrafo("Soy un párrafo nuevo"))
 */

//! contras de Arrow Functions- cuando estamos usando programación orientada a objetos POO