// react imports
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// redux imports
import { useSelector } from 'react-redux'

// component imports
import UserPokedexDisplay from './UserPokedexDisplay'
import AddPokemon from './AddPokemon'

// styles imports
import styles from './UserPokedex.module.scss'

const UserPokedex = () => {
    const allPokedexes = useSelector(state => state.pokedexSlice.allPokedex)
    const { id } = useParams()
    const [pokedex, setPokedex] = useState({})

    useEffect(() => {
            if (allPokedexes) {
                setPokedex(allPokedexes[id - 1])
            }
    }, [allPokedexes])

    return (
        <div>
            <div className={styles.pleasework}>
                <h1>{pokedex ? pokedex.name : null} Pokedex</h1>
                <h2>Pokemon {pokedex.game ? pokedex.game.name :  null}</h2>
                <AddPokemon />
            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Level</th>
                    <th>HP</th>
                    <th>Attack</th>
                    <th>Defense</th>
                    <th>Sp Attack</th>
                    <th>Sp Defense</th>
                    <th>Speed</th>
                    <th></th>
                </tr>
                {pokedex.pokemon ? pokedex.pokemon.map((pokemon) => <UserPokedexDisplay key={pokemon.id} pokemon={pokemon} />) : null}
            </table>
        </div>
    )
}

export default UserPokedex
