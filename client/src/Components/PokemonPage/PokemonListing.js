import React from 'react';

// Material UI Imports
import { Card, makeStyles, CardActionArea, CardMedia, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      width: 250,
      margin: 10,
      border: '1px solid grey',
      boxShadow: '5px 10px black',
    },
    media: {
      height: 250
    },
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
                <Typography variant="h6">{props.pokemon.id}</Typography>
                <Typography variant="h4">{props.pokemon.name}</Typography>
            </CardActionArea>
        </Card>
    )
}

export default PokemonListing
