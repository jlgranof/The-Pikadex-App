import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { useDispatch } from 'react-redux'
import { signup } from '../../Redux/Actions/auth'

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

const SignupModal = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password === confirmPassword) {
            dispatch(signup(username, email, password))
            setOpen(false)
        }
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const updateUserename = (e) => setUsername(e.target.value)
    const updateEmail = (e) => setEmail(e.target.value)
    const updatePassword = (e) => setPassword(e.target.value)
    const updateConfirmPassword = (e) => setConfirmPassword(e.target.value)

    return (
        <div>
            <div>
                <button type="button" onClick={handleOpen}>Sign Up</button>
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
                        <h2 id="transition-modal-title">Signup Form</h2>
                        <div id="transition-modal-description">
                            <form onSubmit={handleSubmit}>
                                <TextField id="standard-basic" label="Username" value={username} onChange={updateUserename} />
                                <br></br>
                                <TextField id="standard-basic" label="Email" value={email} onChange={updateEmail} />
                                <br></br>
                                <TextField id="standard-basic" label="Password" type="password" value={password} onChange={updatePassword}/>
                                <br></br>
                                <TextField id="standard-basic" label="Confirm Password" type="password" value={confirmPassword} onChange={updateConfirmPassword}/>
                                <Button variant="contained" type="submit">Sign Up</Button>
                            </form>
                        </div>
                    </div>
                    </Fade>
                </Modal>
            </div>
        </div>
    )
}

export default SignupModal
