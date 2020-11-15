import React from 'react';
import PokedexListing from './PokedexListing'


const PokedexListContainer = (props) => {
    

    const pokedexComponents = props.pokedexes.map((pokedex) => <PokedexListing key={pokedex.id} pokedex={pokedex} />)

    return (
        <div className='pokedex-list'>
            <h1 className='pokedex-color'>{props.name} Pokedexes</h1>
            {pokedexComponents}
        </div>
    )
}


export default PokedexListContainer
