import React from 'react'
import styles from './PokedexDisplay.module.scss'

const PokedexDisplay = (props) => {
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
        </tr>
    )
}

export default PokedexDisplay
