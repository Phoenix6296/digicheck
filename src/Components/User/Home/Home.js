import Upload from '../Upload/Upload';
import styles from './Home.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Home = () => {
    return (
        <div className={`${styles.home} ${styles.center}`}>
            <Upload />
            <span>OR</span>
            <TextField id="outlined-basic" label="Enter UID" variant="outlined"
                sx={{
                    width: { xs: '100%', sm: '50%' }, borderColor: '#ccc',
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#8ebf42', },
                    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: '#ccc', },
                }}
            />
            <Button variant="outlined"
                sx={{
                    width: { xs: '100%', sm: 'fit-content' }, mt: '2rem', borderColor: '#8ebf42', color: '#8ebf42',
                    '&:hover': { borderColor: '#8ebf42', backgroundColor: '#8ebf42', color: '#fff', },
                }}
            >Submit</Button>
        </div>
    )
}

export default Home