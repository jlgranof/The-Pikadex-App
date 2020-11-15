import React, { useState, useEffect } from 'react'
import PokemonListing from './PokemonListing'
import { useSelector } from 'react-redux'

// Marterial UI imports
import { Grid } from '@material-ui/core'


const Pokemon = () => {
    const pokemons = useSelector(state => state.pokemonSlice.pokemon)
    let pokemonComponents

    if (Array.isArray(pokemons)) {
        pokemonComponents = pokemons.map((pokemon) => <PokemonListing key={pokemon.id} pokemon={pokemon} />)
     } else {
         pokemonComponents = <li>Loading...</li>
     }

    return (
        <div>
            <h2>Pokemon List</h2>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {pokemonComponents}
            </Grid>
        </div>
    )
}

export default Pokemon;
