import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import PokedexDisplay from './PokedexDisplay'
import styles from './Pokedex.module.scss'

const Pokedex = () => {
    const allPokedexes = useSelector(state => state.pokedexSlice.allPokedex)
    const { id } = useParams()

    if (!allPokedexes) {
        return <h1>Loading</h1>
    }
    let pokedex = allPokedexes[id - 1]
    let pokemons = pokedex.pokemon
    const pokedexComponents = pokemons.map((pokemon) => <PokedexDisplay key={pokemon.id} pokemon={pokemon}/>)


    return (
        <div>
            <h1 className={styles.header}>{pokedex.name} Pokedex</h1>
            <h2 className={styles.header}>Pokemon {pokedex.game.name}</h2>
            <table>
                <tr>
                    <th>Level</th>
                    <th>Name</th>
                    <th>HP</th>
                    <th>Attack</th>
                    <th>Defense</th>
                    <th>Sp Attack</th>
                    <th>Sp Defense</th>
                    <th>Speed</th>
                </tr>
                {pokedexComponents}
            </table>
        </div>
    )
}

export default Pokedex
