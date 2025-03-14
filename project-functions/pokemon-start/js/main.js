window.addEventListener('load', init);

//Globals
const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=376';
let gallery;

/**
 * Initialize after the DOM is ready
 */
function init() {
    //Retrieve the gallery
    gallery = document.querySelector('#pokemon-gallery');

    // start the application with loading the API data
    getPokemonData()
}

/**
 * Do the actual AJAX call to the provided URL
 */
function getPokemonData() {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(createPokemonCards)
        .catch(getPokemonErrorHandler);
}

/**
 * Do something nice with the data you got from the external API
 *
 * @param data
 */
function createPokemonCards(data) {
    console.log(data);
    for (let pokemon of data.result){
        // Create empty cards to use later when we got more data
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');
        pokemonCard.dataset.name = pokemon.name;

        // Append the card to the gallery
        gallery.appendChild(pokemonCard);

        // New fetch based on pokemon.url
        fetch(pokemon.url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(fillPokemonCard)
            .catch(getPokemonErrorHandler);
    }
}

/**
 * Do something useful with the error you got back from the external API
 *
 * @param error
 */
function getPokemonErrorHandler(error) {
    console.log(error);
    const message = document.createElement('div');
    message.classList.add('error');
    message.innerHTML = 'Er is een fout';
}

function fillPokemonCard(pokemon) {
    console.log(pokemon);

    //HELP
    console.log(pokemon.id);
    console.log(pokemon.name);
    console.log(pokemon.sprites.other.home.front_default);

    //get the element based on the dataset attribute
    const pokemonCard = document.querySelector(`.pokemon-card[data-name='${pokemon.name}']`);

    // Add the name/number element
    const title = document.createElement('h2');
    title.innerText = `${pokemon.name} (#${pokemon.id})`;
    pokemonCard.appendChild(title);

    //Add the image element
    const image = document.createElement('img');
    image.src = pokemon.sprites.other.home.front_default;
    image.alt = pokemon.name;
    pokemonCard.appendChild(image);
}
