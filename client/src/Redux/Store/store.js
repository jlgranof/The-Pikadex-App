import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import { pokemonSlice } from '../Reducers/PokemonSlice'
import { authSlice } from '../Reducers/AuthSlice'
import { userPokedexSlice } from '../Reducers/UserPokedexSlice'
import { pokedexSlice } from '../Reducers/PokedexSlice'


let storeEnhancer;

if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    storeEnhancer = composeEnhancers(applyMiddleware(thunk));
} else {
    storeEnhancer = applyMiddleware(thunk);
}




const ReducerMerge = combineReducers({ pokemonSlice, authSlice, userPokedexSlice, pokedexSlice })


const configureStore = (initialState) => {
    return createStore (
            ReducerMerge,
            initialState,
            storeEnhancer
        )
};

export default configureStore;
