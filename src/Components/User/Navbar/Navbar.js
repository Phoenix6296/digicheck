import styles from './Navbar.module.css';
import Logo from '../../../assets/images/logo.png'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

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
                        <Link to="/signup"><span className={`${styles.alert_span}`} onClick={onSignUpHandler}>SIGNUP</span></Link> for admin access.
                    </Alert> : null
            }
            <nav className={window.innerWidth < 768 ? `${styles.center}` : null}>
                <Link to="/" className={styles.link}>
                    <div className={`${styles.brand} ${styles.center}`}>
                        <img src={Logo} alt="Brand Logo" />
                        <span>DIGICHECK</span>
                    </div>
                </Link>

                {location.pathname === "/" && (
                    <div className={`${styles.signup} ${styles.center}`}>
                        <Link to="/signup" className={styles.link}>
                            <Button variant="outlined"
                                sx={{
                                    borderColor: '#6AC258', backgroundColor: '#6AC258', color: '#fff',
                                    '&:hover': { borderColor: '#6AC258', color: '#6AC258', backgroundColor: '#fff', }
                                }}
                                onClick={onSignUpHandler}
                            >Signup</Button>
                        </Link>
                        <span>as ADMIN</span>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
