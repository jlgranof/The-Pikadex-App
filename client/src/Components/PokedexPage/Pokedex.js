import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import PokedexDisplay from './PokedexDisplay'
import styles from './Pokedex.module.scss'
import { fetchAllPokedex } from '../../Redux/Actions/pokedex'

const Pokedex = (props) => {
    const allPokedexes = useSelector(state => state.pokedexSlice.allPokedex)
    const { id } = useParams()
    // const dispatch = useDispatch()
    const [pokemons, setPokemons] = useState({})
    const [pokedex, setPokedex] = useState({})


    useEffect(() => {
        const getPokedex = async () => {
            if (allPokedexes) {
                setPokedex(allPokedexes[id - 1])
                setPokemons(allPokedexes[id-1].pokemon)
            }
        }
        getPokedex()
    })

    // let pokedex = allPokedexes[id - 1] ? allPokedexes[id - 1] : null
    // let pokemons = pokedex.pokemon


    return (
        <div>
            <h1 className={styles.header}>{pokedex ? pokedex.name : null} Pokedex</h1>
            <h2 className={styles.header}>Pokemon {pokedex.game ? pokedex.game.name : null}</h2>
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
                {pokedex.pokemon ? pokedex.pokemon.map((pokemon) => <PokedexDisplay key={pokemon.id} pokemon={pokemon}/>) : null}
            </table>
        </div>
    )
}

export default Pokedex
