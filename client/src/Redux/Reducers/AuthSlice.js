import { SET_USER, REMOVE_USER, CREATE_USER } from '../Actions/auth'

export const authSlice = (state = {}, action) => {
    switch (action.type) {
        case SET_USER:
            return action.user
        case CREATE_USER:
            return action.user;
        case REMOVE_USER:
            return {};
        default:
            return null;
    }
}
