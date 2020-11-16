import React from 'react'
import PokedexListContainer from './PokedexListContainer'
import { useSelector } from 'react-redux'
import CreateNewPokedex from './CreateNewPokedex'

const Pokedexes = () => {
    const redPokedexes = useSelector(state => state.pokedexSlice.redPokedex)
    const bluePokedexes = useSelector(state => state.pokedexSlice.bluePokedex)
    const yellowPokedexes = useSelector(state => state.pokedexSlice.yellowPokedex)
    const user = useSelector(state => state.authSlice)

    if (!redPokedexes || !bluePokedexes || !yellowPokedexes) {
        return <h1>loading...</h1>
    }


    let createButton
    if (user.id) {
        createButton = <CreateNewPokedex />
    }

    return (
        <div>
            {createButton}
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
