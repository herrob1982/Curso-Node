

const getPokemonById = (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al obtener el Pokémon con ID ${id}: ${response.statusText}`);
            }

            response.json().then((pokemon) => {
                console.log(pokemon.abilities);

            })
        }); 
}


const getPokemonByIdCadena = (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
        .then(response => response.json())
        //.then( () => { throw new Error('Pokemon no existe') })
        .then(pokemon => pokemon)
}


module.exports = 
{
    getPokemonById,
    getPokemonByIdCadena
}
 

