// react imports
import React from 'react'
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

    if (!allPokedexes) {
        return <h1>Loading...</h1>
    }


    let pokedex = allPokedexes[id - 1]
    let pokemons = pokedex.pokemon
    const pokedexComponents = pokemons.map((pokemon) => <UserPokedexDisplay key={pokemon.id} pokemon={pokemon}/>)



    return (
        <div>
            <div className={styles.pleasework}>
                <h1>{pokedex.name} Pokedex</h1>
                <h2>Pokemon {pokedex.game.name}</h2>
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
                {pokedexComponents}
            </table>
        </div>
    )
}

export default UserPokedex
