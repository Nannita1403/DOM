const emojis = ["😂", "😁", "😎", "😍", "😴", "🤐"];
const numbers = [32442, 234, 2, 34, 234, 23, 4, 23, 423, 4, 23, 4];

//! PRIMERO MALA MANERA = NO SE HACE ASI:
//? para la lista de los emojis

//* selecciono el contenedor donde voy a poner los emojis
/* const emojiDiv = document.querySelector(".insert-emoji-here");

//* recorro el array de emojis para llegar a ellos de 1 en 1
for (const emoji of emojis) {  ///recorro el array de emojis para llegar a ellos de 1 en 1
    
    const pEmoji = document.createElement("p");    //* creo un elemento de parrafo
    
    pEmoji.textContent = emoji;                    //* Le agrego el parrafo el valor: emoji
    emojiDiv.appendChild(pEmoji);                  //* meto el emoji en el contenedor
}*/
//? para la lista los numeros
/* const numDiv = document.querySelector(".insert-num-here");

for (const number of numbers) {  ///recorro el array de emojis para llegar a ellos de 1 en 1
    
    const pNumber = document.createElement("p");    // creo un elemento de parrafo
    
    pNumber.textContent = number;                    // Le agrego el texto = emoji
    numDiv.appendChild(pNumber);                  // y lo meto en el HTML
} */

//! AHORA DE LA MANERA QUE CORRESPONDE: con Arrow function:
//* para lo que no puedo cambiar que no es GENERICO, me llega por parametro a la función
//! declaración
            //(lo que no puedo cambiar y meto pr parametro) //* elemento padre= numeros o emojis y tmb el ARRAY
const printDivs = (selectorPadre, array) => {
    const div = document.querySelector(selectorPadre);

    // limpiar el div para cuando agregue el nuevo nro o emoji no se repitan sino qu agregue de a 1
    div.innerHTML = ``;

    for (const element of array) {

        const p = document.createElement("p");
        p.textContent = element;
        // aca agrego un llamado cuadno usuario hace click en los elementos que ya estan en la caja
        p.addEventListener("click", (e) => e.target.remove());
        div.appendChild(p);
    }
}

//! ejecuciones ACA LES ENVIO QUIEN ES: EL SELECTOR PADRE Y EL ARRAY!!!
printDivs(".insert-num-here", numbers);
printDivs(".insert-emoji-here", emojis);


// saber que ha escrito el usuario
// controlar cuando quiere enviar el usuario el nuevo dato

//! Primero - acceder a los elementos (input), (button)
const input = document.querySelector("input");
const button = document.querySelector("button");

const insertarDato = () => {
    //! saber que ha escrito el usuario
// NaN es: Not an number || parseInt = pasado a numerico||  input.vale = me permite sabes que ha escrito como valor 

    if (isNaN(parseInt(input.value)) === true) {
        console.log(input.value); // sale el emoji en consola
        //? el código si el dato NO es un número lo introducimos en los emojis
        emojis.push(input.value);
        printDivs(".insert-emoji-here", emojis); // ACA LO METO EN EL DOM por que sino mas alla que se agreguen solo se ven en JS
    } else {
        //? el código si el dato SI ES un número lo introducimos en los numeros
        numbers.push(parseInt(input.value));
        printDivs(".insert-num-here", numbers); // ACA LO METO EN EL DOM por que sino mas alla que se agreguen solo se ven en JS
    }
    //? aca limpiamos el espacio del imput para volver a cargar de nuevo
    input.value = "";

}

//! controlar cuando quiere enviar el usuario el nuevo dato - "cuando haga click el botón"
/* button.onclick = () => alert("he hecho el click");*/ //* esto me permite ir viendo si funciona con un alerta y un arrow funcion
button.onclick = insertarDato;




//! EJERCITACION CON SPLICE:
// QUE CUANDO YO QUITE ALGO DEL DIV, ESO NO VUELVA APARECER DEL ARRAY INICIAL

