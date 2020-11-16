import React from 'react';
import styles from './StatsContainer.module.scss'

const StatsContainer = (props) => {
    const numberBars = (stats) => {
        let bars = []
        for (let i = 0; i < Math.floor(stats / 25); i++) {
            bars.push(<div className={styles.bar}></div>)
        }
        return bars
    }

    return (
        <div className={styles.container}>
            <div className={styles.statholder}><b className={styles.caption}>HP</b> <div className={styles.hp}>{numberBars(props.stats.hp)}</div></div>
            <div className={styles.statholder}><b className={styles.caption}>Att</b> {numberBars(props.stats.attack)}</div>
            <div className={styles.statholder}><b className={styles.caption}>Def</b> {numberBars(props.stats.defense)}</div>
            <div className={styles.statholder}><b className={styles.caption}>SpA</b> {numberBars(props.stats.specialAttack)}</div>
            <div className={styles.statholder}><b className={styles.caption}>SpD</b> {numberBars(props.stats.specialDefense)}</div>
            <div className={styles.statholder}><b className={styles.caption}>Spd</b> {numberBars(props.stats.speed)}</div>
        </div>
    )
}

export default StatsContainer
