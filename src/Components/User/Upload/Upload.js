import styles from './Upload.module.css';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const Upload = () => {
    return (
        <div className={`${styles.upload__wrapper}`}>
            <div className={`${styles.upload}`}>
                <div className={`${styles.button} ${styles.center}`}>
                    <FileUploadOutlinedIcon />
                    <label for="upload">Upload File</label>
                </div>
                <input id="upload" type="file" />
                <p>Upload a certificate</p>
            </div>
        </div>
    );
};

export default Upload;
