import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './PokedexListing.module.scss'

const PokedexListing = (props) => {

    if (!props.pokedex.pokemon) {
        return (
            <div className={styles.listing}>
                <NavLink to={`/pokedex/${props.pokedex.id}`} className={styles.link}>
                    {props.pokedex.name} - 0 Pokemon!
                </NavLink>
            </div>
        )
    }
    else {
        return (
            <div className={styles.listing}>
                <NavLink to={`/pokedex/${props.pokedex.id}`} className={styles.link}>
                    {props.pokedex.name} - {props.pokedex.pokemon.length} Pokemon!
                </NavLink>
            </div>
        )
    }
}

export default PokedexListing
