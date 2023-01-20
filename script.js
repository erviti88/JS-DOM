/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme */

const boton = document.querySelector('.showme');
console.log(boton);

/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */

const pillado = document.querySelector('#pillado');
console.log(pillado);

/* 1.3 Usa querySelector para mostrar por consola todos los p */

const parrafos = document.querySelectorAll('p');
console.log(parrafos);

/* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon */

const pokemon = document.querySelectorAll('.pokemon');
console.log(pokemon);

/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe". */

const testMe = document.querySelectorAll('[data-function="testMe"]');
console.log(testMe);

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */

console.log(testMe[3]);

/* 2.1 Inserta dinamicamente en un html un div vacio con javascript. */

const emptyDiv = document.createElement('div');
document.body.append(emptyDiv);
console.log(emptyDiv);

/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */
const newDiv = document.createElement('div');
const newParagraph = document.createElement('p');

newDiv.append(newParagraph);
document.body.append(newDiv);
console.log(newDiv);

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */

const newDiv2 = document.createElement('div');

for (let i = 0; i < 6; i++) {
    newDiv2.innerHTML += `<p></p>`
}

document.body.append(newDiv2);
console.log(newDiv2);

/* 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */

const newParagraph2 = document.createElement('p');
newParagraph2.innerText += `Soy dinámico!`

document.body.append(newParagraph2);
console.log(newParagraph2);

/* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */

const insertTextH2 = document.querySelector('.fn-insert-here');
insertTextH2.innerHTML += `Wubba Lubba dub dub`;

document.body.append(insertTextH2);
console.log(insertTextH2);

/*  2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. */
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ulApps = document.createElement('ul');

for (let i = 0; i < apps.length; i++) {
    ulApps.innerHTML += "<li>" + apps[i] + "</li>";
}

document.body.append(ulApps);
console.log(ulApps);

/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */

const fnRemoveMe = document.querySelectorAll('.fn-remove-me');

for (let i = 0; i < fnRemoveMe.length; i++) {
    fnRemoveMe[i].remove();
}

console.log(fnRemoveMe);

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild. */

const newParagraph3 = document.createElement('p');
newParagraph3.innerHTML += `Voy en medio!`

console.log(newParagraph3);

/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */

const insertText = document.querySelectorAll('.fn-insert-here');

for (let i = 0; i < insertText.length; i++) {
    insertText[i].innerHTML += `<p>Voy dentro!</p>`;
}