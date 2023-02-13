import { useState } from 'react';
import styles from './Upload.module.css';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

const Upload = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('Upload a certificate');
    const onUploadHandler = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        if (e.target.files[0].name.length > 20) {
            setFileName(e.target.files[0].name.substring(0, 20) + '...');
        }
        console.log(file);
    }
    return (
        <div className={`${styles.upload__wrapper}`}>
            <div className={`${styles.upload}`}>
                <div className={`${styles.button} ${styles.center}`}>
                    <FileUploadOutlinedIcon />
                    <label for="upload">Upload File</label>
                </div>
                <input id="upload" type="file"
                    onChange={onUploadHandler}
                />
                <p>{fileName}</p>
            </div>
        </div>
    );
};

export default Upload;
