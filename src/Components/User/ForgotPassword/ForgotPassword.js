import styles from '../Signup/Signup.module.css'
import { useState, useEffect } from 'react'
import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('')
    const [emailValidation, setEmailValidation] = useState(false)

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
        sendPasswordResetEmail(email)
            .then(() => {
                console.log('Password reset email sent');
                navigate('/login');
            })
            .catch((error) => {
                setError(error.message);
            });
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
