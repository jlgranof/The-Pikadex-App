// react imports
import React from 'react'

// redux imports
import { useSelector } from 'react-redux'

// component imports
import PokemonListing from './PokemonListing'

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
        <div className='pokemongrid'>
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
