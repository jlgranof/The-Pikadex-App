import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import StatsContainer from './StatsContainer'

// Material UI imports
import { CardActionArea, CardMedia, makeStyles, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        display: 'block',
        margin: 'auto',
        height: 1000,
        border: '1px solid grey',
        boxShadow: '5px 10px grey'
    },
    title:{
        textAlign: 'center',
        marginTop: 30,
        color: 'black',
        textShadow: '2px 2px grey'
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
        border: '1px solid grey',
        boxShadow: '5px 10px black',
    },
    stats: {
        height: 300,
        width: 200,
        border: '1px solid black',
        boxShadow: '2px 4px black',
        display: 'block',
        margin: 'auto',
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
            <h1>Pokemon Details</h1>
            <div className={classes.root}>
                    <img
                        className={classes.media}
                        src={pokemon.official_artwork}
                        alt={pokemon.name}
                    />
                    <h2 className={classes.title}>{pokemon.name}</h2>
                    <h3 className={classes.id}>#{pokemon.id}</h3>
                    <div className={classes.stats}>
                        <StatsContainer stats={stats}/>
                    </div>
                    <div className={classes.basic_info}>
                        {/*basic info container*/}
                    </div>
            </div>
        </div>
    )
}

export default PokemonDetails
