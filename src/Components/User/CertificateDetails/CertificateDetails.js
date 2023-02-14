import styles from './CertificateDetails.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import Card from '../Card/Card';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const CertificateDetails = () => {
    return (
        <div className={`${styles.certificateDetails} ${styles.center}`}>
            <h3>Certificate Reciepent</h3>
            <div className={`${styles.person}`}>
                <AccountCircleIcon
                    fontSize='large'
                />
                <p>Krishna Biswakarma</p>
            </div>
            <Card />
            <div className={`${styles.center}`}>
                <Button variant="outlined" color="success"><FileDownloadOutlinedIcon fontSize='small' /> Download</Button>
                <Button variant="outlined" color="success"><ShareOutlinedIcon fontSize='small' /> Share</Button>
            </div>

        </div>
    )
}

export default CertificateDetails