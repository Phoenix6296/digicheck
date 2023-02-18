// import { useState } from 'react';
import styles from './Navbar.module.css'
import Logo from '../../../assets/images/logo.png'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const Navbar = () => {
    const onSignUpHandler = () => {
        console.log('clicked');
    };

    return (
        <>
            {
                window.innerWidth < 768 ?
                    <Alert severity="info"
                        sx={{
                            '& .MuiAlert-icon': { color: '#6AC258', }, display: 'flex', justifyContent: 'center', alignItems: 'center',
                        }}>
                        <span className={`${styles.alert_span}`} onClick={onSignUpHandler}>SIGNUP</span> for admin access.
                    </Alert> : null
            }
            <nav className={window.innerWidth < 768 ? `${styles.center}` : null}>
                <div className={`${styles.brand} ${styles.center}`}>
                    <img src={Logo} alt="Brand Logo" />
                    <span>DIGICHECK</span>
                </div>
                <div className={`${styles.signup} ${styles.center}`}>
                    <Button variant="outlined"
                        sx={{
                            borderColor: '#6AC258', backgroundColor: '#6AC258', color: '#fff',
                            '&:hover': { borderColor: '#6AC258', color: '#6AC258', backgroundColor: '#fff', }
                        }}
                        onClick={onSignUpHandler}
                    >Signup</Button>
                    <span>as ADMIN</span>
                </div>
            </nav>
        </>
    );
}

export default Navbar;