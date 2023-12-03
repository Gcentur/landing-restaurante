import { comidas } from './comidas.js';

// Contenedor de las tarjetas
const contenedor = document.querySelector('.cards');
// Itera sobre los datos del JSON
comidas.forEach(comida => {
    // Crea los elementos
    const label = document.createElement('label');
    const input = document.createElement('input');
    const article = document.createElement('article');
    const front = document.createElement('div');
    const back = document.createElement('div');
    const headerFront = document.createElement('header');
    const headerBack = document.createElement('header');
    const h2Front = document.createElement('h2');
    const h2Back = document.createElement('h2');
    const img = document.createElement('img');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    // Establece los atributos y el contenido
    input.type = 'checkbox';
    input.name = 'flipCard';
    front.className = 'front';
    back.className = 'back';
    h2Front.textContent = comida.nombre;
    h2Back.textContent = 'Descripción';
    img.src = comida.imagen;
    img.alt = comida.nombre;
    h4.textContent = comida.descripcion;
    p.textContent = `Precio: ₲${comida.precio}`;
    // Agregar los elementos al DOM
    headerFront.appendChild(h2Front);
    headerBack.appendChild(h2Back);
    front.appendChild(headerFront);
    front.appendChild(img);
    front.appendChild(h4);
    back.appendChild(headerBack);
    back.appendChild(p);
    article.appendChild(front);
    article.appendChild(back);
    label.appendChild(input);
    label.appendChild(article);
    contenedor.appendChild(label);
});