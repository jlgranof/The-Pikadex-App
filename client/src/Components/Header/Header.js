import React from 'react'
import { NavLink } from 'react-router-dom'
import LoginModal from './LoginModal'
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/Actions/auth'
import SignupModal from './SignupModal'

const Header = () => {
    // const logoutUser = useSelector(state => state.authSlice.logout)
    // const dispatch = useDispatch()

    // const logout = () => {
    //     console.log('here')
    //     dispatch(logout())
    // }

    return (
        <div className="header" style={{ backgroundColor: "black" }}>
            <div className='left-header'>
                <NavLink to='/' style={{ color: "white", margin: '10px' }}>Home</NavLink>
                <NavLink to='/pokedex' style={{ color: "white", margin: '10px' }}>Pokedexes</NavLink>
            </div>
            <NavLink to='/' className='logo'><img src='https://fontmeme.com/permalink/201029/92b01d4290fbd8a10e8bb62ebd4f5cfb.png' alt='Pikadex'></img></NavLink>
            <LoginModal />
            <SignupModal />
            {/* <button type='button' onClick={logout}>Logout</button> */}
        </div>
    )
}

export default Header
