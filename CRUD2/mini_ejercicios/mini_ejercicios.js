
//? MINUTO 56

//! Mini ejercicios
const alumns = [
    {
        name: "Nadia",
        score: 0
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
        score: 2
    },
    {
        name: "Johan",
        score: 3
    },
    {
        name: "Eva",
        score: 4
    },
    {
        name: "Alba",
        score: 6
    },
    {
        name: "Martin",
        score: 6
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
 //! casos en los que no lo utilizaría: cuando tengamos una respuesta muy larga a una condición - si tengo muchas comprobaciones

     // condición    ? respuesta si se cumple   : respuesta si no se cumple
    alumn.score >= 5 ? p.className = "aprobado" : p.className = "suspedido";
    
    p.textContent = `${alumn.name} tiene un score de: ${alumn.score}`;

    li.addEventListener("click", () => alert(`has hecho click en el alumn: ${alumn.name}`));
    
    li.append(p); //pongo el p dentro del li
    alumnList.append(li); //pongo el li dentro del ul que es la alumnList
 }
 document.body.append(alumnList);  // aca lo que hago es INSERTO la LISTA  en el Body

 
//? añadir una clase mediaNegativa o mediaPositiva a nuestro ul, dependiendo de si la media de notas 
//? de los alumnos es mayor o igual a 5 (mediaPositiva) o menor o igual (mediaNegativa);


let sum = 0; // para sacar la suma de los alumnos

for (let i = 0; i < alumns.length; i++) {
    const alumn = alumns[i];
    
    sum += alumn.score; //sumamos cada score de cada alumno
}

// sum / alumns.length //* media de la suma de score / los alumnos 

if ((sum / alumns.length) >= 5) {  //si la media es > o = que 5
    alumnList.className = "mediaPositiva";  //le doy el valor de media positiva
} else {
    alumnList.className = "mediaNegativa"; //le doy el valor media negativa
}

for (const alumn of alumns) {
    const li = document.createElement("li");
    const p = document.createElement("p"); 
    
//! Yo puedo integrar HTML desde JS - todo esto remplaza lo anterior:
//? PROBLEMA ACA ES QUE QUE ACA NO SE PUEDEN  GENERAR NODOS (CON LO CUAL NO PUEDO METER FUNCIONALIDAD)
//? Ademas: al JS procesarse al final: este ultimo come al for inicial que si tiene un evento por ej. y se vuelve toodo texto
    for (const alumn of alumns) {
//ACA ME PERMITE CREAR HTML DESDE JS //* ACA SIEMPRE ``PARA PODER USAR VARIABLES
        alumnList.innerHTML += `    
            <li>
                <p class="${alumn.score >= 5 ? 'aprobado' : 'suspenso'}">
                    ${alumn.name} tiene una puntuación de: ${alumn.score}
                </p>
            </li>
        `
    }
    
     document.body.append(alumnList);   
    /* 
    

    li.addEventListener("click", () => alert(`has hecho click en el alumn: ${alumn.name}`));
    
    li.append(p);
    alumnsList.append(li);

*/
}