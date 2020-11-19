// react imports
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

// redux imports
import { useDispatch, useSelector } from 'react-redux'

// action imports
import { fetchUserPokedex, addNewPokemon } from '../../Redux/Actions/userPokedex'
import { fetchAllPokedex, fetchBluePokedex, fetchRedPokedex, fetchYellowPokedex } from '../../Redux/Actions/pokedex'

// Material UI Imports
import { Modal, Backdrop, Fade, makeStyles, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }));

const AddPokemon = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [pokemon_id, setPokemonID] = useState('')
    const [level, setLevel] = useState('')
    const [hp, setHP] = useState('')
    const [attack, setAttack] = useState('')
    const [defense, setDefense] = useState('')
    const [special_attack, setSpecialAttack] = useState('')
    const [special_defense, setSpecialDefense] = useState('')
    const [speed, setSpeed] = useState('')
    const { id } = useParams()

    const pokemons = useSelector(state => state.pokemonSlice).pokemon

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewPokemon(id, pokemon_id, level, hp, attack, defense, special_attack, special_defense, speed, false, true))
        dispatch(fetchUserPokedex())
        dispatch(fetchRedPokedex())
        dispatch(fetchBluePokedex())
        dispatch(fetchYellowPokedex())
        dispatch(fetchAllPokedex())
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const updatePokemonID = (e) => setPokemonID(e.target.value);
    const updateLevel = (e) => setLevel(e.target.value)
    const updateHP = (e) => setHP(e.target.value)
    const updateAttack = (e) => setAttack(e.target.value)
    const updateDefense = (e) => setDefense(e.target.value)
    const updateSpecialAttack = (e) => setSpecialAttack(e.target.value)
    const updateSpecialDefense = (e) => setSpecialDefense(e.target.value)
    const updateSpeed = (e) => setSpeed(e.target.value)

    let pokemonMenu
    if (pokemons) {
        pokemonMenu = pokemons.map((pokemon) => <MenuItem value={pokemon.id}>{pokemon.name}</MenuItem>)
    }

    return (
        <div>
            <div>
                <button type="button" onClick={handleOpen}>Add New Pokemon</button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">New Pokemon</h2>
                        <div id="transition-modal-description">
                            <form onSubmit={handleSubmit}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Pokemon</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={pokemon_id}
                                    onChange={updatePokemonID}
                                    >
                                    {pokemonMenu}
                                    </Select>
                                </FormControl>
                                <br></br>
                                <TextField id="standard-basic" label="Level" value={level} onChange={updateLevel} />
                                <br></br>
                                <TextField id="standard-basic" label="HP" value={hp} onChange={updateHP} />
                                <br></br>
                                <TextField id="standard-basic" label="Attack" value={attack} onChange={updateAttack} />
                                <br></br>
                                <TextField id="standard-basic" label="Defense" value={defense} onChange={updateDefense} />
                                <br></br>
                                <TextField id="standard-basic" label="Special Attack" value={special_attack} onChange={updateSpecialAttack} />
                                <br></br>
                                <TextField id="standard-basic" label="Special Defense" value={special_defense} onChange={updateSpecialDefense} />
                                <br></br>
                                <TextField id="standard-basic" label="Speed" value={speed} onChange={updateSpeed} />
                                <br></br>
                                <Button variant="contained" type="submit">Add</Button>
                            </form>
                        </div>
                    </div>
                    </Fade>
                </Modal>
            </div>
        </div>
    )
}

export default AddPokemon
