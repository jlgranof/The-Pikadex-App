import Cookies from 'universal-cookie'

export const SET_USER = "SET_USER"
export const REMOVE_USER = "REMOVE_USER"
export const CREATE_USER = "CREATE_USER"

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

export const createUser = (user) => {
    return {
        type: CREATE_USER,
        user
    }
}

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch('/api/session/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        })
        if (response.ok) {
            const user = await response.json()
            dispatch(setUser(user))
        }
    }
}

export const signup = (username, email, password) => {
    return async dispatch => {
        const response = await fetch('/api/users/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        if (response.ok) {
            const user = await response.json()
            dispatch(createUser(user))
        }
    }
}

export const logout = () => {
    return async dispatch => {
        const response = await fetch('/api/session/logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            dispatch(removeUser())
        }
        return response
    }
}
