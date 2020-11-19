export const GET_RED_POKEDEX = "GET RED POKEDEX"
export const GET_BLUE_POKEDEX = "GET BLUE POKEDEX"
export const GET_YELLOW_POKEDEX = "GET YELLOW POKEDEX"
export const GET_ALL_POKEDEX = "GET ALL POKEDEX"

export const getRedPokedex = (redPokedex) => {
    return {
        type: GET_RED_POKEDEX,
        redPokedex
    }
}

export const getBluePokedex = (bluePokedex) => {
    return {
        type: GET_BLUE_POKEDEX,
        bluePokedex
    }
}

export const getYellowPokedex = (yellowPokedex) => {
    return {
        type: GET_YELLOW_POKEDEX,
        yellowPokedex
    }
}

export const getAllPokedex = (allPokedex) => {
    return {
        type: GET_ALL_POKEDEX,
        allPokedex
    }
}

export const fetchRedPokedex = () => {
    return async dispatch => {
        const response = await fetch(`/api/pokedex/game/1`)
        const data = await response.json();
        dispatch(getRedPokedex(data.pokedex))
        return response
    }
}

export const fetchBluePokedex = () => {
    return async dispatch => {
        const response = await fetch(`/api/pokedex/game/2`)
        const data = await response.json();
        dispatch(getBluePokedex(data.pokedex))
        return response
    }
}

export const fetchYellowPokedex = () => {
    return async dispatch => {
        const response = await fetch(`/api/pokedex/game/3`)
        const data = await response.json();
        dispatch(getYellowPokedex(data.pokedex))
        return response
    }
}

export const fetchAllPokedex = () => {
    return async dispatch => {
        const response = await fetch('/api/pokedex/')
        const data = await response.json()
        dispatch(getAllPokedex(data.pokedex))
        return response
    }
}
