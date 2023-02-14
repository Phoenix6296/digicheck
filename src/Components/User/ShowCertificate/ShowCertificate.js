// import { useState } from 'react';
import styles from './ShowCertificate.module.css';
import PDF from '../../../assets/pdf.pdf';
import CertificateDetails from '../CertificateDetails/CertificateDetails';

const ShowCertificate = () => {
  return (
    <div className={`${styles.showCertificate} ${styles.center}`}>
      <iframe title="file" src={PDF} className={`${styles.showPdf}`} />
      <CertificateDetails />
    </div>
  )
}

export default ShowCertificate