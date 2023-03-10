import styles from './Signup.module.css'
import { useState, useEffect } from 'react'
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../Firebase'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { SyncLoader } from 'react-spinners';

const Signup = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    const [userValidation, setUserValidation] = useState({ name: false, email: false, password: false, confirmPassword: false })

    const [error, setError] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setError('');
        }, 3000)
    }, [error])
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user && user.emailVerified) navigate('/admin')
        })
    }, [navigate])

    //Visibility Handler of Password
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //Logic for Name, Email, Password and Confirm Password
    const handleName = (e) => {
        setUser({ ...user, name: e.target.value })
        e.target.value.length >= 3 ? setUserValidation({ ...userValidation, name: true }) : setUserValidation({ ...userValidation, name: false });
    }
    const handleEmail = (e) => {
        setUser({ ...user, email: e.target.value })
        e.target.value.includes('@') ? setUserValidation({ ...userValidation, email: true }) : setUserValidation({ ...userValidation, email: false });
    }
    const handlePassword = (e) => {
        setUser({ ...user, password: e.target.value })
        e.target.value.length >= 8 && e.target.value.match(/[A-Z]/) && e.target.value.match(/[a-z]/) && e.target.value.match(/[0-9]/) && e.target.value.match(/[!@#$%^&*]/) ? setUserValidation({ ...userValidation, password: true }) : setUserValidation({ ...userValidation, password: false });
    }
    const handleConfirmPassword = (e) => {
        setUser({ ...user, confirmPassword: e.target.value })
        e.target.value === user.password ? setUserValidation({ ...userValidation, confirmPassword: true }) : setUserValidation({ ...userValidation, confirmPassword: false });
    }

    const submitHandler = async () => {
        setIsLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, user.email, user.password);
            await sendEmailVerification(auth.currentUser);
            setIsLoading(false);
            navigate('/email_verify_sent');
            updateProfile(auth.currentUser, { displayName: user.name })
        } catch (error) {
            setError(error.message);
        }
    }

    if (isLoading) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><SyncLoader loading={isLoading} size={20} /></div>

    return (
        <div className={`${styles.container__wrapper} ${styles.center}`}>
            <div className={`${styles.container} ${styles.center}`}>
                <h1>Signup</h1>
                <form action="" type="submit" className={`${styles.form} ${styles.center}`}>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <OutlinedInput type='text' id="name" label="Name"
                            onChange={handleName}
                            value={user.name}
                        />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <OutlinedInput type='email' id="email" label="Email"
                            onChange={handleEmail}
                            value={user.email}
                        />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                    <IconButton edge="end">
                                        <Tooltip title="At least 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character" className={styles.center}><InfoIcon fontSize="small" />
                                        </Tooltip>
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            onChange={handlePassword}
                            value={user.password}
                            required
                        />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>
                        <OutlinedInput type='password' id="confirm-password" label="Confirm Password"
                            onChange={handleConfirmPassword}
                            value={user.confirmPassword}
                            required />
                    </FormControl>
                    <p className={styles.error_message}>{error}</p>
                    <Button variant="contained" onClick={submitHandler}
                        disabled={!userValidation.name || !userValidation.email || !userValidation.password || !userValidation.confirmPassword}
                    >Signup</Button>
                </form>
                <Link to="/login" className={styles.link}>Already have an account? Login</Link>
            </div>
        </div>
    )
}

export default Signup