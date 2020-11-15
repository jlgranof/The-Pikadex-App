export const GET_USER_POKEDEX = "GET USER POKEDEX"

export const getUserPokedex = (userPokedex) => {
    return {
        type: GET_USER_POKEDEX,
        userPokedex
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
