import styles from './App.module.css'
import Navbar from './Components/User/Navbar/Navbar'
const App = () => {
  return (
    <div className={`${styles.app}`}>
      <Navbar />
    </div>
  )
}

export default App