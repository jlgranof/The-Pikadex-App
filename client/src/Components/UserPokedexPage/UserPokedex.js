import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import UserPokedexDisplay from './UserPokedexDisplay'

const UserPokedex = () => {
    const allPokedexes = useSelector(state => state.pokedexSlice.allPokedex)
    const { id } = useParams()

    if (!allPokedexes) {
        return <h1>Loading</h1>
    }

    let pokedex = allPokedexes[id - 1]
    let pokemons = pokedex.pokemon
    const pokedexComponents = pokemons.map((pokemon) => <UserPokedexDisplay key={pokemon.id} pokemon={pokemon}/>)


    return (
        <div>
            <h1></h1>
            <button>Add Pokemon</button>
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
