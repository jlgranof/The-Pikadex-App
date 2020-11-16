export const GET_USER_POKEDEX = "GET USER POKEDEX"
export const ADD_USER_POKEDEX = "ADD USER POKEDEX"
export const ADD_POKEMON = "ADD POKEMON"
export const EDIT_POKEMON = "EDIT POKEMON"

export const getUserPokedex = (userPokedex) => {
    return {
        type: GET_USER_POKEDEX,
        userPokedex
    }
}

export const addUserPokedex = (userPokedex) => {
    return {
        type: ADD_USER_POKEDEX,
        userPokedex
    }
}

export const addPokemon = (pokemon) => {
    return {
        type: ADD_POKEMON,
        pokemon
    }
}

export const editPokemon = (pokemon) => {
    return {
        type: EDIT_POKEMON,
        pokemon
    }
}


export const fetchUserPokedex = (current_user) => {
    return async dispatch => {
        const response = await fetch(`/api/pokedex/${current_user}`)
        const data = await response.json();
        dispatch(getUserPokedex(data.pokedex))
        return response
    }
}

export const createUserPokedex = (name, user_id, game_id) => {
    return async dispatch => {
        const response = await fetch(`/api/pokedex/`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                user_id,
                game_id
            })
        })
        if (response.ok) {
            const pokedex = await response.json()
            dispatch(addUserPokedex(pokedex.pokedex))
        }
    }
}

export const addNewPokemon = (pokedex_id, pokemon_id, level, hp, attack, defense, special_attack, special_defense, speed, active_party, still_own) => {
    return async dispatch => {
        const response = await fetch(`/api/pokedex/${pokedex_id}/pokemon`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                pokedex_id, pokemon_id, level, hp, attack, defense, special_attack, special_defense, speed, active_party, still_own
            })
        })
        if (response.ok) {
            const pokemon = await response.json()
            dispatch(addPokemon(pokemon.pokemon))
        }
    }
}

export const updatePokemon = (id, level, hp, attack, defense, special_attack, special_defense, speed, active_party, still_own) => {
    return async dispatch => {
        console.log('here')
        const response = await fetch(`/api/pokedex/pokemon/${id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({level, hp, attack, defense, special_attack, special_defense, speed, active_party, still_own})
        })
        if (response.ok) {
            const pokemon = await response.json()
            dispatch(editPokemon(pokemon.pokemon))
        }
    }
}
