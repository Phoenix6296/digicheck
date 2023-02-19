import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, IconButton } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../../../Firebase';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedbackIcon from '@mui/icons-material/RateReview';
import LogoutIcon from '@mui/icons-material/Logout';

const CustomNavbar = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
            return;
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Profile', 'Dashboard', 'Feedback'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => navigate(`/admin/${text.toLowerCase()}`)}>
                            <ListItemIcon>
                                {index === 0 ? <PersonIcon /> : index === 1 ? <DashboardIcon /> : <FeedbackIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem key="logout" disablePadding>
                    <ListItemButton onClick={async () => { await signOut(auth); navigate('/'); }}>
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton sx={{ p: 0, borderRadius: '50%', border: '1px solid #6AC258' }}
                        onClick={toggleDrawer(anchor, true)}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default CustomNavbar;