import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../Firebase';
import { signOut } from 'firebase/auth';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';

const Navbar = (props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const avatarName = user ? user.displayName.split(' ')[0] : null;
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user)
            console.log(user, "Hello");
        });
        return unsubscribe;
    }, []);

    const logoutHandler = async () => {
        await signOut(auth);
        navigate('/');
    };

    const handleClick = (event) => { setAnchorEl(event.currentTarget) };
    const handleClose = () => { setAnchorEl(null) };

    return (
        <nav className={window.innerWidth < 768 ? `${styles.center}` : null}>
            <Link to="/" className={styles.link}>
                <div className={`${styles.brand} ${styles.center}`}>
                    <img src={Logo} alt="Brand Logo" />
                    <span>DIGICHECK</span>
                </div>
            </Link>
            {user ?
                <div className={`${styles.options} ${styles.center}`}>
                    <ul className={`${styles.list} ${styles.center}`}>
                        <li><Link to="/admin/dashboard" className={`${styles.nav_link} ${props.active === 'dashboard' ? styles.active : null}`}>Dashboard</Link></li>
                        <li><Link to="/admin/profile" className={`${styles.nav_link} ${props.active === 'profile' ? styles.active : null}`}>Profile</Link></li>
                        <li><Link to="/admin/feedback" className={`${styles.nav_link} ${props.active === 'feedback' ? styles.active : null}`}>Feedback</Link></li>
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
                : <Link to="/login"><button>Login</button></Link>}
        </nav>
    );
}

export default Navbar;
