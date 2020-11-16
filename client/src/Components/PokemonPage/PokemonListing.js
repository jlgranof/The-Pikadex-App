import React from 'react';

// Material UI Imports
import { Card, makeStyles, CardActionArea, CardMedia, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      width: 250,
      margin: 15,
      border: '1px solid black',
      boxShadow: '0 10px 10px 10px #bfbfbf',
      borderRadius: '10%'
    },
    media: {
      height: 250
    },
    info: {
      textAlign: 'center'
    },
    name: {
      textShadow: '5px 5px #bfbfbf',
      color: 'black',
      textDecoration: 'none'
    }
  });


  const PokemonListing = (props) => {
    const classes = useStyles();


    return (
      <Card className={classes.root} >
          <CardActionArea >
              <NavLink to={`/pokemon/${props.pokemon.id}`} >
                  <CardMedia
                      className={classes.media}
                       image={props.pokemon.official_artwork}
                  />
              </NavLink>
                  <div className={classes.info}>
                    <h2 className={classes.name}>#{props.pokemon.id}</h2>
                    <h1 className={classes.name}>{props.pokemon.name}</h1>
                  </div>
              </CardActionArea>
      </Card>
    )
}

export default PokemonListing
