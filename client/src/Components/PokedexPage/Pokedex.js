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

    let pokemons = allPokedexes[id - 1].pokemon
    const pokedexComponents = pokemons.map((pokemon) => <PokedexDisplay key={pokemon.id} pokemon={pokemon}/>)


    return (
        <div>
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
