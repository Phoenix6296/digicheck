import styles from './SignupForm.module.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Form from '../Form/Form';
import Cartoon from '../../../assets/images/cartoon.png';

const SignupForm = (props) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '75%', sm: '400px' },
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        zIndex: 2,
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',
    };

    const { showModal, onClose } = props;

    const handleCloseModal = () => {
        onClose();
    };

    const renderBackdrop = (props) => (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backdropFilter: 'blur(5px) saturate(150%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
            }}
            {...props}
        />
    );

    return (
        <>
            <Modal
                open={showModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onClick={handleCloseModal}
                slots={{ backdrop: renderBackdrop }}
            >
                <Box sx={style} onClick={(e) => e.stopPropagation()}>
                    <img src={Cartoon} alt="CartoonImage" className={`${styles.cartoon}`} />
                    <Form />
                </Box>
            </Modal>
        </>
    );
};

export default SignupForm;
