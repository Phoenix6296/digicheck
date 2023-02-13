import Upload from '../Upload/Upload';
import styles from './Home.module.css';
const Home = () => {
    return (
        <div className={`${styles.home}`}>
            <Upload />
        </div>
    )
}

export default Home