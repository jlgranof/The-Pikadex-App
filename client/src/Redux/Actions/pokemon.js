export const GET_POKEMON = "GET POKEMON"

export const getPokemon = (pokemon) => {
    return {
        type: GET_POKEMON,
        pokemon
    }
}

export const fetchPokemon = () => {
    return async dispatch => {
        const response = await fetch('/api/pokemon/');
        const data = await response.json();
        dispatch(getPokemon(data.pokemon))
        return response
    }
}
