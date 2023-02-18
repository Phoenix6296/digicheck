import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../../assets/images/logo.png'
import Alert from '@mui/material/Alert';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../Firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        return unsubscribe;
    }, []);

    const onSignUpHandler = () => {
        console.log('clicked');
    };

    const logoutHandler = () => {
        signOut(auth).then(() => {
            navigate('/');
            console.log('Logged out');
        }).catch((error) => {
            console.log(error.message);
        });
    };

    return (
        <>
            {
                window.innerWidth < 768 ?
                    <Alert severity="info"
                        sx={{
                            '& .MuiAlert-icon': { color: '#6AC258', }, display: 'flex', justifyContent: 'center', alignItems: 'center',
                        }}>
                        <Link to="/login"><span className={`${styles.alert_span}`} onClick={onSignUpHandler}>SIGNUP</span></Link> for admin access.
                    </Alert> : null
            }
            <nav className={window.innerWidth < 768 ? `${styles.center}` : null}>
                <Link to="/" className={styles.link}>
                    <div className={`${styles.brand} ${styles.center}`}>
                        <img src={Logo} alt="Brand Logo" />
                        <span>DIGICHECK</span>
                    </div>
                </Link>
                {
                    user ?
                        <button onClick={logoutHandler}>Logout</button>
                        :
                        <Link to="/login"><button>Login</button></Link>
                }
            </nav>
        </>
    );
}

export default Navbar;
