// Grab all elements that need to be dynamic

let cardImg = document.querySelector('body > div > div > div.card-img')

let name = document.querySelector('body > div > div > div.card-header > h1')

let ability = document.querySelector('body > div > div > div.card-body > div.card-body-header > h2')

let weight = document.querySelector('body > div > div > div.card-body > div.paragraph > p > em > strong')

let button = document.querySelector('body > div > form > button')

button.addEventListener('click', (e) => {
    e.preventDefault() 
    let input = document.querySelector('body > div > form > input').value
 /*   
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(response => response.json())
        .then(data => )  
*/

    async function getPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        const data = await response.json() // gets all the data from the referenced api (the url above)
        console.log(data.name)

        name.textContent = `${data.name[0].toUpperCase()}${data.name.slice(1)}`
        cardImg.firstElementChild.src = data.sprites.front_shiny // because cardImag is the div that is holding the imag element, use the child thing to acess the first child within the div then the [0] on the img attributes will be the src attribute
        ability.textContent = data.abilities[1].ability.name
        weight.textContent = data.weight
    }

    getPokemon()
})
