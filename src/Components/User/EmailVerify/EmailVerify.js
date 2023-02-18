import styles from './EmailVerify.module.css'
import VERIFY_EMAIL from '../../../assets/images/verify.gif';
import { auth } from '../../../Firebase';
import { useState } from 'react';
import { SyncLoader } from "react-spinners";
import { Link, useNavigate } from 'react-router-dom';

const EmailVerify = () => {
    //Go to login page after 3 seconds of signup button click
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    auth.onAuthStateChanged((user) => {
        if (!user) navigate('/signup');
        else if (user && user.emailVerified) navigate('/admin')
        // else navigate('/login');
        setIsLoading(false);
    })
    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}><SyncLoader loading={isLoading} size={20} /></div >
        )
    }

    return (
        <div className={styles.email}>
            <img src={VERIFY_EMAIL} alt="VerifyEmail" />
            <p>Verification Email has been sent to your email address.</p>
            <h3><Link to="/login" className={styles.link}>Click Here!</Link> to Login</h3>
        </div>
    )
}

export default EmailVerify