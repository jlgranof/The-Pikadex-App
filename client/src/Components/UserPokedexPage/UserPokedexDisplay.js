// react imports
import React from 'react'

// component imports
import EditPokemon from './EditPokemon'

// styles imports
import styles from './UserPokedexDisplay.module.scss'

const UserPokedexDisplay = (props) => {
    return (
        <tr className={styles.tr}>
            <td>{props.pokemon.pokemon.name}</td>
            <td>{props.pokemon.level}</td>
            <td>{props.pokemon.hp}</td>
            <td>{props.pokemon.attack}</td>
            <td>{props.pokemon.defense}</td>
            <td>{props.pokemon.special_attack}</td>
            <td>{props.pokemon.special_defense}</td>
            <td>{props.pokemon.speed}</td>
            <td><EditPokemon id={props.pokemon.id}/></td>
        </tr>
    )
}

export default UserPokedexDisplay
