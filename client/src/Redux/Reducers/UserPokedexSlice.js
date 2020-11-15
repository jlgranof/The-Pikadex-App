import { GET_USER_POKEDEX } from '../Actions/userPokedex'

export const userPokedexSlice = (state = {}, action) => {
    Object.freeze(state)
    const nextState = {...state}

    switch (action.type) {
        case GET_USER_POKEDEX:
            nextState.userPokedex = [...action.userPokedex]
            return nextState
        default:
            return state;
    }
}
