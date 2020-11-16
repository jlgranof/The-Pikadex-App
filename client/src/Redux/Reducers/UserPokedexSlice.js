import { GET_USER_POKEDEX, ADD_USER_POKEDEX, ADD_POKEMON, EDIT_POKEMON } from '../Actions/userPokedex'

export const userPokedexSlice = (state = {}, action) => {
    Object.freeze(state)
    const nextState = {...state}

    switch (action.type) {
        case GET_USER_POKEDEX:
            nextState.userPokedex = [...action.userPokedex]
            return nextState
        case ADD_USER_POKEDEX:
            return nextState
        case ADD_POKEMON:
            return nextState
        case EDIT_POKEMON:
            return nextState
        default:
            return state;
    }
}
