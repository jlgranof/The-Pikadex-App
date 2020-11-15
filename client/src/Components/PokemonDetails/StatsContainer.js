import React from 'react';
import StatBar from './StatBar';

// total number for stats is 800 **** top pokemon under #722 has stats of 720
// individual stats go to 255

const StatsContainer = (props) => {
    const numberBars = (stats) => {
        let bars = []
        for (let i = 0; i < Math.floor(stats / 25); i++) {
            bars.push(<div className='stat-bar'></div>)
        }
        return bars
    }

    return (
        <div className='stats-container'>
            <div><b>HP</b> <div className='bar-container'>{numberBars(props.stats.hp)}</div></div>
            <div>Att {numberBars(props.stats.attack)}</div>
            <div>Def {numberBars(props.stats.defense)}</div>
            <div>SpA {numberBars(props.stats.specialAttack)}</div>
            <div>SpD {numberBars(props.stats.specialDefense)}</div>
            <div>Spd {numberBars(props.stats.speed)}</div>
        </div>
    )
}

export default StatsContainer
