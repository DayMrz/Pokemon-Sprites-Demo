// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const span1 = document.createElement('span');
    span1.innerText = `#${i}`;
    span1.alt = ''
    const imgPokes = document.createElement('img');
    imgPokes.src = `${url}${i}.png`


    pokemon.appendChild(imgPokes);
    pokemon.appendChild(span1);
    container.appendChild(pokemon);
}

