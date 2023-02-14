import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = () => {
    const [orgName, setOrgName] = useState('');
    const [orgEmail, setOrgEmail] = useState('');
    const [contactNo, setContactNo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted: ${orgName}, ${orgEmail}, ${contactNo}`);
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextField id="org-name" label="Organization Name" value={orgName}
                onChange={(event) => setOrgName(event.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                id="org-email"
                label="Organization Email"
                value={orgEmail}
                onChange={(event) => setOrgEmail(event.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                id="contact-no"
                label="Contact No"
                value={contactNo}
                onChange={(event) => setContactNo(event.target.value)}
                fullWidth
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
        </Box>
    );
};

export default Form;
