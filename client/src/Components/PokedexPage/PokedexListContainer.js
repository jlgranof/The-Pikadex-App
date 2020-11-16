import React from 'react';
import PokedexListing from './PokedexListing'
import styles from './PokedexListContainer.module.scss'


const PokedexListContainer = (props) => {


    const pokedexComponents = props.pokedexes.map((pokedex) => <PokedexListing key={pokedex.id} pokedex={pokedex} />)

    return (
        <div className={styles.list}>
            <h1 className={styles.color}>{props.name} Pokedexes</h1>
            {pokedexComponents}
        </div>
    )
}


export default PokedexListContainer
