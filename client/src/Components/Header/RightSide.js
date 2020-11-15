import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'
import { fetchUserPokedex } from '../../Redux/Actions/userPokedex'
import PokedexDropdown from './PokedexDropdown'




const RightSide = () => {
    const user = useSelector(state => state.authSlice)
    const pokedexes = useSelector(state => state.userPokedexState)
    const dispatch = useDispatch()

    // useEffect (() => {
    //     const getUserPokedex = async () => {
    //         if (user) {
    //             dispatch(fetchUserPokedex(user.id))
    //         }
    //     }
    //     getUserPokedex()
    // })

    if (!user.id) {
        return (
            <div>
                <LoginModal />
                <SignupModal />
            </div>
        )
    }

    return (
        <div>
            <button>Logout</button>
            <PokedexDropdown />
        </div>
    )
}

export default RightSide
