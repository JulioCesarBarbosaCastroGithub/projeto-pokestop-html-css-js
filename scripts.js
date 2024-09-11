const urlApi = 'https://pokeapi.co/api/v2/pokemon';

const randomId = () => Math.floor(Math.random() * 905);

const getAbilities = (abilities) => abilities.map(item => item.ability.name);

const getPokemon = () =>
    fetch(`${urlApi}/${randomId()}`)
        .then(response => response.json())
        .then(pokemon => {
            const pokemonSelected = {
                name: pokemon.name,
                image: pokemon.sprites.others.dream_world.front_default,
                abilities: getAbilities(pokemon.abilities)
            }
        }
        )

getPokemon();