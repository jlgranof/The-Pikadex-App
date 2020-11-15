import { GET_POKEMON } from '../Actions/pokemon'

export const pokemonSlice = (state = {}, action) => {
    Object.freeze(state)
    const nextState = {...state}

    switch (action.type) {
        case GET_POKEMON:
            nextState.pokemon = [...action.pokemon]
            return nextState
        default:
            return state;
    }
}
