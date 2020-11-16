import React from 'react'
import PokedexListContainer from './PokedexListContainer'
import { useSelector } from 'react-redux'
import CreateNewPokedex from './CreateNewPokedex'
import styles from './Pokedexes.module.scss'

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
            <div className={styles.all}>
                <div className={styles.red}>
                    <PokedexListContainer name="Red" pokedexes={redPokedexes}/>
                </div>
                <div className={styles.blue}>
                    <PokedexListContainer name="Blue" pokedexes={bluePokedexes}/>
                </div>
                <div className={styles.yellow}>
                    <PokedexListContainer name="Yellow" pokedexes={yellowPokedexes}/>
                </div>
            </div>
        </div>
    )
}

export default Pokedexes
