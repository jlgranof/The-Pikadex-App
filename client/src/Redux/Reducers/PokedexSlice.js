import { GET_RED_POKEDEX, GET_BLUE_POKEDEX, GET_YELLOW_POKEDEX, GET_ALL_POKEDEX } from '../Actions/pokedex'

export const pokedexSlice = (state = {}, action) => {
    Object.freeze(state)
    const nextState = {...state}

    switch (action.type) {
        case GET_RED_POKEDEX:
            nextState.redPokedex = [...action.redPokedex]
            return nextState
        case GET_BLUE_POKEDEX:
            nextState.bluePokedex = [...action.bluePokedex]
            return nextState
        case GET_YELLOW_POKEDEX:
            nextState.yellowPokedex = [...action.yellowPokedex]
            return nextState
        case GET_ALL_POKEDEX:
            nextState.allPokedex = [...action.allPokedex]
            return nextState
        default:
            return state;
    }
}
