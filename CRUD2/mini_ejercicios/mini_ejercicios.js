
//? MINUTO 56

//! Mini ejercicios
const alumns = [
    {
        name: "Nadia",
        score: 7
    },
    {
        name: "Rocío",
        score: 6
    },
    {
        name: "Ignacio",
        score: 3
    },
    {
        name: "Jeggan", 
        score: 6
    },
    {
        name: "Johan",
        score: 3
    },
    {
        name: "Eva",
        score: 9
    },
    {
        name: "Alba",
        score: 6
    },
    {
        name: "Martin",
        score: 0
    },
    {
        name: "Kevin",
        score: 6
    },
]

//* QUIERO VER E L LISTADO DE LOS ALUMNOS Y LAS NOTAS
/*
for (const alumno of alumnos) {  //aca estoy haciendo un bucle para los 7 elementos (cada alumnos)
    const h3 = document.createElement("h3"); // hemos CREADO nuestro titulo = h3 para cada texto

    h3.textContent = '${alumno.name} tiene un score de: ${alumno.score}' ; // aca CREO el texto para verlo

    document.body.append(h3); // aca lo que hago es INSERTARLO  en el Body
}*/


//* quiero hacer esta estructura con UL
/*
{
<ul>
    <li>
        <p></p>
    </li>
    <li>
        <p></p>
    </li>
    <li>
        <p></p>
    </li>
</ul> 
} */
const alumnList = document.createElement("ul"); //creo las Ul SIEMPRE antes de que comienze el bucle para poder usarlo

for (const alumn of alumns) {  
    const li = document.createElement("li"); //aca creamos los Li que va a ser cada alumno
    const p = document.createElement("p");  // aca creamos el texto de cada alumno

    if (alumn.score >= 5) {
        p.className = "aprobado"
    } else {
        p.className = "suspendido"
    }
 //? HAY UNA MANERA MAS RAPIDA PARA IF- ELSE CUANDO NO HAY MUCHAS OPCIONES:
     // condición    ? respuesta si se cumple   : respuesta si no se cumple
    alumn.score >= 5 ? p.className = "aprobado" : p.className = "suspedido";
    
    p.textContent = `${alumn.name} tiene un score de: ${alumn.score}`;

    li.append(p); //pongo el p dentro del li
    alumnList.append(li); //pongo el li dentro del ul que es la alumnList
 }
 document.body.append(alumnList);  // aca lo que hago es INSERTO la LISTA  en el Body

 //? HAY UNA MANERA MAS RAPIDA PARA IF- ELSE CUANDO NO HAY MUCHAS OPCIONES:


// añadir una clase mediaNegativa o mediaPositiva a nuestro ul, dependiendo de si la media de notas de los alumnos es mayor o igual a 5 (mediaPositiva) o menor o igual (mediaNegativa);
/* 
let sum = 0;

for (let i = 0; i < alumns.length; i++) {
    const alumn = alumns[i];
    
    sum += alumn.score;
}

// sum / alumns.length

if ((sum / alumns.length) >= 5) {
    alumnsList.className = "mediaPositiva";
} else {
    alumnsList.className = "mediaNegativa";
}

for (const alumn of alumns) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    
    /* if (alumn.score >= 5) {
        p.className = "aprobado"
    } else {
        p.className = "suspenso"
    } 

    //! casos en los que no lo utilizaría: cuando tengamos una respuesta muy larga a una condición - si tengo muchas comprobaciones
    // condición     ? respuesta si se cumple   : respuesta si no se cumple
    
    alumn.score >= 5 ? p.className = "aprobado" : p.className = "suspenso";

    p.textContent = `${alumn.name} tiene un score de: ${alumn.score}`;

    li.addEventListener("click", () => alert(`has hecho click en el alumn: ${alumn.name}`));
    
    li.append(p);
    alumnsList.append(li);


for (const alumn of alumns) {
    alumnsList.innerHTML += `
        <li>
            <p class="${alumn.score >= 5 ? 'aprobado' : 'suspenso'}">
                ${alumn.name} tiene una puntuación de: ${alumn.score}
            </p>
        </li>
    `
}

 document.body.append(alumnsList);

*/
