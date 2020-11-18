// react imports
import React from 'react'
import { useParams } from 'react-router-dom'

// redux imports
import { useSelector } from 'react-redux'

// component imports
import StatsContainer from './StatsContainer'

// styles imports
import styles from './PokemonDetails.module.scss'

// Material UI imports
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        marginTop: 40,
        maxWidth: 550,
        paddingTop: 25,
        display: 'block',
        margin: 'auto',
        height: 800,
        border: '1px solid black',
        boxShadow: '0 10px 10px 10px #bfbfbf',
        borderRadius: '10%',
        marginBottom: 50
    }
})

const PokemonDetails = (props) => {
    const pokemons = useSelector(state => state.pokemonSlice.pokemon)
    const { id } = useParams()
    const classes = useStyles()


    if (!pokemons) {
        return (
            <h1>Loading</h1>
        )
    }


    const pokemon = pokemons[id - 1]

    const stats = {
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        specialAttack: pokemon.special_attack,
        specialDefense: pokemon.special_defense,
        speed: pokemon.speed,
        totalStats: pokemon.total_stats
    }



    return (
        <div>
            <div className={classes.root}>
                    <img
                        className={styles.media}
                        src={pokemon.official_artwork}
                        alt={pokemon.name}
                    />
                    <h1 className={styles.title}>{pokemon.name}</h1>
                    <h2 className={styles.id}>#{pokemon.id}</h2>
                    <h1 className={styles.title}>{pokemon.type_1} {pokemon.type_2}</h1>
                    <h2 className={styles.id}>Weight: {pokemon.weight}</h2>
                    <h2 className={styles.id}>Height: {pokemon.height}</h2>
                    <div className={styles.stats}>
                        <StatsContainer stats={stats}/>
                    </div>
            </div>
        </div>
    )
}

export default PokemonDetails
