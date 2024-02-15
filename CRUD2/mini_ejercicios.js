

//! Mini ejercicios
const alumns = [
    {
        name: "Nadia",
        score: 0
    },
    {
        name: "Rocío",
        score: 0
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
        score: 0
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

{/* 
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
} /*


const alumnsList = document.createElement("ul");

// añadir una clase mediaNegativa o mediaPositiva a nuestro ul, dependiendo de si la media de notas de los alumnos es mayor o igual a 5 (mediaPositiva) o menor o igual (mediaNegativa);

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
    } */

    //! casos en los que no lo utilizaría: cuando tengamos una respuesta muy larga a una condición - si tengo muchas comprobaciones
    // condición     ? respuesta si se cumple   : respuesta si no se cumple
    /*
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

// document.body.append(alumnsList);

