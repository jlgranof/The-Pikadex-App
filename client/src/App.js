import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Cookies from 'js-cookie'

import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './Redux/Actions/auth'
import { fetchPokemon } from './Redux/Actions/pokemon'
import { fetchUserPokedex } from './Redux/Actions/userPokedex'
import { fetchRedPokedex, fetchBluePokedex, fetchYellowPokedex, fetchAllPokedex } from './Redux/Actions/pokedex';

import Header from './Components/Header/Header'
import Pokemon from './Components/PokemonPage/Pokemon';
import PokemonDetails from './Components/PokemonDetails/PokemonDetails';
import Pokedexes from './Components/PokedexPage/Pokedexes';
import UserPokedex from './Components/UserPokedexPage/UserPokedex'
import Pokedex from './Components/PokedexPage/Pokedex'
import PageNotFound from './Components/404/PageNotFound';



const App = (props) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const user = useSelector(state => state.authSlice)

    useEffect (() => {
        const getUser = async () => {
            const response = await fetch('/api/session/refresh', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'access': Cookies.get('access_token_cookie')
                }
            })
            console.log('hi')
            if (response.ok) {
                const data = await response.json()
                dispatch(setUser(data))
                dispatch(fetchUserPokedex(data.id))
                setLoading(false)
            }
        }
        const preloadPokemon = async () => {
            dispatch(fetchPokemon())
            setLoading(false)
        }
        const preloadPokedex = async () => {
            dispatch(fetchRedPokedex())
            dispatch(fetchBluePokedex())
            dispatch(fetchYellowPokedex())
            dispatch(fetchAllPokedex())
            setLoading(false)
        }

        getUser()
        preloadPokemon()
        preloadPokedex()
    }, [loading])

    useEffect (() => {
        const getUserPokedex = async () => {
            if (user) {
                dispatch(fetchUserPokedex(user.id))
            }
        }
        getUserPokedex()
    })


    if (loading) return null
  return (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/pokemon/:id"><PokemonDetails /></Route>
            <Route path="/pokedex/:id"><Pokedex /></Route>
            <Route path="/pokedex"><Pokedexes /></Route>
            <Route path='/user/:id'><UserPokedex /></Route>
            <Route exact path="/"><Pokemon /></Route>
            <Route><PageNotFound /></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
