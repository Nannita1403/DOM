//! CRUD -> SIGLAS -> CREATE READ UPDATE DELETE
//! DOM -> DOCUMENT OBJECT MODEL

//! READ
// getElementsByClassName  -   getElementsByTagName  -   getElementById // no hace falta para estos sintaxis de css

//? querySelector y querySelectorAll (sintaxis de css);

const myH1 = document.querySelector("h1");

//! UPDATE
console.log(myH1.innerHTML);    //veo el texto del H1
console.log(myH1.innerText);    //veo el texto del H1
console.log(myH1.textContent);  //veo el texto del H1
console.log(myH1.clientWidth);  // veo el ancho del cliente

myH1.textContent = "He cambiado ya no soy el mismo";
/* myH1.style.position = "absolute";
myH1.style.top = "200px"; */
/* myH1.className = "";         //
myH1.classList.add();           //
myH1.classList.remove();        //
myH1.classList.toggle(); */     //

// sustituir / sobreescribir -> una clase
/* myH1.className = "cambiado";
myH1.classList.add("añadido");
myH1.classList.remove("cambiado");
myH1.classList.toggle("cambiado"); */

const arrayImg = [
    "https://tse2.mm.bing.net/th?id=OIP.W65e6yHYVkJPaQKo3NJ_QQHaEo&pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th?id=OIP.hXJ4lT8pFi5hXI56W5z77wHaE8&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.VPWV_1KIYXUZvlfQgKq48gHaLG&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.YQAL4E88_z3ygw4jwO3VsAHaEK&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.UaFeQquHHLSOSmiT7ygu6QHaEK&pid=Api&P=0&h=180",
];

const img = document.querySelector("img");
// Yo quiero que cuando entres a la pagina te de una imagen random
img.src = arrayImg[Math.floor(Math.random() * arrayImg.length)];

//! Math.floor(Math.random() * arrayImg.length = da una posicion aliatoria del array

//! DELETE
// remove() -> es un método que elimina un único de html desde js
myH1.remove();

//! CREATE
// para crear un nodo en html desde js utilizaremos el método createElement();
//          document.createElement("nombreEtiqueta")
const myP = document.createElement("p");
// el elemento se ha creado pero está en el limbo;

// inyectar - appendChild()
//! elementoPadre.appendChild(elementoHijo);

myP.textContent = "He añadido contenido de texto a mi párrafo creado mediante js";

/* document.body.appendChild(myP); */


//? meter el párrafo dentro del div  siempre al final
// necesito el div
// READ
const myDiv = document.querySelector(".insert-here");

 myDiv.appendChild(myP);

// ? Aca lo que hago es enviar el parrafo donde quiero, por ej antes del div
 // elementoPadre.insertBefore(elementoHijo, elementoAdyacente);
document.body.insertBefore(myP, img);

