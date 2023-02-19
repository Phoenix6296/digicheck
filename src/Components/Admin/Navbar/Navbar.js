import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../Firebase';
import { signOut } from 'firebase/auth';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import CustomNavbar from './CustomDrawer';

const Navbar = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const avatarName = user ? user.displayName.split(' ')[0] : null;

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
                navigate('/admin/dashboard');
            } else navigate('/');
        });

        return unsubscribe;
    }, [user, navigate]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
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
        <nav className={window.innerWidth < 768 ? `${styles.center} ${styles.nav_admin}` : null}>
            <Link to="/" className={styles.link}>
                <div className={`${styles.brand} ${styles.center}`}>
                    <img src={Logo} alt="Brand Logo" />
                    <span>DIGICHECK</span>
                </div>
            </Link>
            {window.innerWidth < 768 ? <CustomNavbar /> :
                <>
                    <div className={`${styles.options} ${styles.center}`}>
                        <ul className={`${styles.list} ${styles.center}`}>
                            <Link to="/admin/dashboard" className={`${styles.nav_link} ${props.active === 'dashboard' ? styles.active : null}`}><li>Dashboard</li></Link>
                            <Link to="/admin/profile" className={`${styles.nav_link} ${props.active === 'profile' ? styles.active : null}`}><li>Profile</li></Link>
                            <Link to="/admin/feedback" className={`${styles.nav_link} ${props.active === 'feedback' ? styles.active : null}`}><li>Feedback</li></Link>
                        </ul>

                        <div className={`${styles.user_avatar} ${styles.center}`}>
                            <p>Welcome, <span>{avatarName}</span></p>
                            <IconButton sx={{ p: 0, borderRadius: '50%', border: '1px solid #6AC258' }}
                                onClick={handleClick}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </>
            }
        </nav>
    );
}

export default Navbar;
