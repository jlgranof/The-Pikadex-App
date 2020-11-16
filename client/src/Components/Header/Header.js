// react imports
import React from 'react'
import { NavLink } from 'react-router-dom'

// component imports
import RightSide from './RightSide'

const Header = () => {


    return (
        <div className="header" style={{ backgroundColor: "black" }}>
            <div className='left-header'>
                <button className='button'>
                    <NavLink to='/'>Home</NavLink>
                </button>>
                <button className='button'>
                    <NavLink to='/pokedex'>Pokedexes</NavLink>
                </button>
            </div>
            <NavLink to='/' className='logo'><img src='https://fontmeme.com/permalink/201029/92b01d4290fbd8a10e8bb62ebd4f5cfb.png' alt='Pikadex'></img></NavLink>
            <RightSide />
        </div>
    )
}

export default Header
