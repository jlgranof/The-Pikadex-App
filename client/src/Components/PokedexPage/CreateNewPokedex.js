import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/Actions/auth'
import { fetchUserPokedex, createUserPokedex } from '../../Redux/Actions/userPokedex'
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

const CreateNewPokedex = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState('')
    const [game_id, setGameID] = useState('')
    const user = useSelector(state => state.authSlice)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createUserPokedex(name, user.id, game_id))
        dispatch(fetchUserPokedex(user.id))
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

    const updateName = (e) => setName(e.target.value);
    const updateGame = (e) => setGameID(e.target.value);

    return (
        <div>
            <div>
                <button type="button" onClick={handleOpen}>Create New Pokedex</button>
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
                        <h2 id="transition-modal-title">New Pokedex</h2>
                        <div id="transition-modal-description">
                            <form onSubmit={handleSubmit}>
                                <TextField id="standard-basic" label="Name" value={name} onChange={updateName} />
                                <br></br>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Game</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={game_id}
                                    onChange={updateGame}
                                    >
                                    <MenuItem value={1}>Pokemon Red</MenuItem>
                                    <MenuItem value={2}>Pokemon Blue</MenuItem>
                                    <MenuItem value={3}>Pokemon Yellow</MenuItem>
                                    </Select>
                                </FormControl>
                                <br></br>
                                <Button variant="contained" type="submit">Create</Button>
                            </form>
                        </div>
                    </div>
                    </Fade>
                </Modal>
            </div>
        </div>
    )
}

export default CreateNewPokedex
