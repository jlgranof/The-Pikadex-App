import React from 'react'
import { NavLink } from 'react-router-dom'

const PokedexListing = (props) => {

    if (!props.pokedex.pokemon) {
        return (
            <div className='pokedex-listing'>
                <NavLink to={`/pokedex/${props.pokedex.id}`}>{props.pokedex.name} - 0 Pokemon!</NavLink>
            </div>
        )
    }
    else {
        return (
            <div className='pokedex-listing'>
                <NavLink to={`/pokedex/${props.pokedex.id}`} className='pokedex-listing'>{props.pokedex.name} - {props.pokedex.pokemon.length} Pokemon!</NavLink>
            </div>
        )
    }
}

export default PokedexListing
