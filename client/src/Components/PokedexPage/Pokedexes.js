import React from 'react'
import PokedexListContainer from './PokedexListContainer'
import { useSelector } from 'react-redux'

const Pokedexes = () => {
    const redPokedexes = useSelector(state => state.pokedexSlice.redPokedex)
    const bluePokedexes = useSelector(state => state.pokedexSlice.bluePokedex)
    const yellowPokedexes = useSelector(state => state.pokedexSlice.yellowPokedex)

    if (!redPokedexes || !bluePokedexes || !yellowPokedexes) {
        return <h1>Loading</h1>
    }



    return (
        <div>
            <button>Create New Pokedex</button>
            <div className='all-3-pokedexes'>
                <div className='red-container'>
                    <PokedexListContainer name="Red" pokedexes={redPokedexes}/>
                </div>
                <div className='blue-container'>
                    <PokedexListContainer name="Blue" pokedexes={bluePokedexes}/>
                </div>
                <div className='yellow-container'>
                    <PokedexListContainer name="Yellow" pokedexes={yellowPokedexes}/>
                </div>
            </div>
        </div>
    )
}

export default Pokedexes
