import styles from '../Signup/Signup.module.css'
import { useState, useEffect } from 'react'
import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('')
    const [emailValidation, setEmailValidation] = useState(false)
    //If user is logged in, redirect to home page
    useEffect(() => {
        setTimeout(() => {
            setError('');
        }, 3000)
    }, [error])

    const handleEmail = (e) => {
        setEmail(e.target.value);
        e.target.value.includes('@') ? setEmailValidation(true) : setEmailValidation(false);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Submitted');
    }
    return (
        <div className={`${styles.container__wrapper} ${styles.center}`}>
            <div className={`${styles.container} ${styles.center}`}>
                <h1>Reset Password</h1>
                <form action="" type="submit" className={`${styles.form} ${styles.center}`}>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <OutlinedInput type='email' id="email" label="Email" onChange={handleEmail} value={email} />
                    </FormControl>
                    <p className={styles.error_message}>{error}</p>
                    <Button variant="contained" onClick={submitHandler} disabled={!emailValidation}>Send</Button>
                </form>
                <Link to="/login" className={styles.link}>Click here to Login</Link>
            </div>
        </div>
    )
}

export default ForgotPassword