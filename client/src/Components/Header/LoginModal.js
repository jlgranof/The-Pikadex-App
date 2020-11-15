import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/Actions/auth'
import { fetchUserPokedex } from '../../Redux/Actions/userPokedex'


// Material UI Imports
import { Modal, Backdrop, Fade, makeStyles, TextField, Button } from '@material-ui/core'

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
  }));

const LoginModal = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const user = useSelector(state => state.authSlice)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
        console.log(user)
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const demoLogin = (e) => {
        e.preventDefault()
        dispatch(login('demo@user.com', 'password'))
        dispatch(fetchUserPokedex(1))
        setOpen(false)
    }

    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);

    return (
        <div>
            <div>
                <button type="button" onClick={handleOpen}>Login</button>
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
                        <h2 id="transition-modal-title">Login Form</h2>
                        <div id="transition-modal-description">
                            <form onSubmit={handleSubmit}>
                                <TextField id="standard-basic" label="Email" value={email} onChange={updateEmail} />
                                <br></br>
                                <TextField id="standard-basic" label="Password" type="password" value={password} onChange={updatePassword}/>
                                <br></br>
                                <Button variant="contained" type="submit">Login</Button>
                            </form>
                            <button onClick={demoLogin}>Demo</button>
                        </div>
                    </div>
                    </Fade>
                </Modal>
            </div>
        </div>
    )
}

export default LoginModal
