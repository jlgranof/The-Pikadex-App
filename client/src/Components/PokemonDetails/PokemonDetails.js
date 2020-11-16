import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import StatsContainer from './StatsContainer'

// Material UI imports
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        marginTop: 50,
        maxWidth: 550,
        display: 'block',
        margin: 'auto',
        height: 750,
        border: '1px solid black',
        boxShadow: '0 10px 10px 10px #bfbfbf',
        borderRadius: '10%'
    },
    title:{
        textAlign: 'center',
        marginTop: 30,
        color: 'black',
        textShadow: '2px 2px #bfbfbf'
    },
    id: {
        textAlign: 'center',
        marginTop: 5,
        color: 'grey',
    },
    media: {
        height: 300,
        width: 300,
        display: 'block',
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid black',
        boxShadow: '0 10px 10px 10px #bfbfbf',
        borderRadius: '25%'
    },
    stats: {
        height: 100,
        width: 200,
        display: 'block',
        marginLeft: 100
    },
    basic_info: {
        height: 200,
        width: 200,
        border: '1px solid black',
        boxShadow: '2px 4px black',
        display: 'block',
        margin: 'auto',
        marginTop: 10
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
                        className={classes.media}
                        src={pokemon.official_artwork}
                        alt={pokemon.name}
                    />
                    <h2 className={classes.title}>{pokemon.name}</h2>
                    <h3 className={classes.id}>#{pokemon.id}</h3>
                    <h3 className={classes.title}>{pokemon.type_1} {pokemon.type_2}</h3>
                    <h4 className={classes.id}>Weight: {pokemon.weight}</h4>
                    <h4 className={classes.id}>Height: {pokemon.height}</h4>
                    <div className={classes.stats}>
                        <StatsContainer stats={stats}/>
                    </div>
            </div>
        </div>
    )
}

export default PokemonDetails
