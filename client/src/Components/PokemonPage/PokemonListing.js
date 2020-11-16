// react imports
import React from 'react';
import { NavLink } from 'react-router-dom';

// style imports
import styles from './PokemonListing.module.scss'

  const PokemonListing = (props) => {
    return (
      <div className={styles.root} >
              <NavLink to={`/pokemon/${props.pokemon.id}`} >
                    <img
                        className={styles.media}
                        src={props.pokemon.official_artwork}
                        alt={props.pokemon.name}
                    />
              </NavLink>
                  <div className={styles.info}>
                    <h2 className={styles.name}>#{props.pokemon.id}</h2>
                    <h1 className={styles.name}>{props.pokemon.name}</h1>
                  </div>
      </div>
    )
}

export default PokemonListing
