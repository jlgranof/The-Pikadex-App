// react imports
import React from 'react'

// redux imports
import { useSelector } from 'react-redux'

// component imports
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'
import PokedexDropdown from './PokedexDropdown'

// action imports
import { logout } from '../../Redux/Actions/auth'




const RightSide = () => {
    const user = useSelector(state => state.authSlice)


    if (!user.id) {
        return (
            <div className='right-side'>
                <LoginModal />
                <SignupModal />
            </div>
        )
    }

    return (
        <div className='right-side'>
            <button type='button' onClick={logout}>Logout</button>
            <PokedexDropdown />
        </div>
    )
}

export default RightSide
